'use client';
import { memo } from 'react';
import { Button, Spin, Table, TableColumnsType } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import s from './table.module.scss';

interface HomeProps {
  data?: any;
  isLoading?: boolean;
  columns?: TableColumnsType<any>;
  showAddNew?: boolean;
  onAddNew?: (args: any) => void;
}

const TableContainer: React.FC<HomeProps> = props => {
  return (
    <div className={s.home}>
      {props.showAddNew && (
        <div className={s.addBtn}>
          <Button onClick={props.onAddNew} type="default" icon={<PlusSquareOutlined />} size={'large'}>
            Add New
          </Button>
        </div>
      )}
      {props.isLoading ? (
        <div className={s.loading}>
          <Spin />
        </div>
      ) : (
        <Table columns={props.columns} dataSource={props.data} pagination={{ pageSize: 10 }} />
      )}
    </div>
  );
};
export default memo(TableContainer);
