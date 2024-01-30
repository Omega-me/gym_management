'use client';
import { CreateGymClientDTO } from '@/common/dto';
import { UseMutateFunction } from '@tanstack/react-query';
import { Button, Modal } from 'antd';
import { memo, useState } from 'react';
import { OptionsOrGroups, GroupBase } from 'react-select';
import Select from 'react-select';

interface AddModalProps {
  options?: OptionsOrGroups<any, GroupBase<any>> | undefined;
  label?: string;
  buttonLable: string;
  id: number;
  isGym?: boolean;
  createGymClientRelation: UseMutateFunction<any, any, CreateGymClientDTO, any>;
}

const AddModal: React.FC<AddModalProps> = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [val, setVal] = useState<null | { label: string; value: any }>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (val && val.value) {
      if (props.isGym) {
        props.createGymClientRelation({
          id_gym: props.id,
          id_client: val.value,
        });
      } else {
        props.createGymClientRelation({
          id_client: props.id,
          id_gym: val.value,
        });
      }
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setVal(null);
  };
  return (
    <>
      <Button type="default" size="large" onClick={showModal}>
        {props.buttonLable}
      </Button>
      <Modal title={props.label} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Select options={props.options} onChange={val => setVal(val)} />
      </Modal>
    </>
  );
};
export default memo(AddModal);
