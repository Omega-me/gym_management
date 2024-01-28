'use client';
import { CreateGymDTO, GymDTO, UpdateGymDTO } from '@/common/dto';
import { GymDetails, ShowGymDetails } from '@/containers/components';
import { useGymMutation, useGymQuery } from '@/hooks/useGym';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface GymDetailsModuleProps {
  id?: string;
  show?: boolean;
}
const GymDetailsModule: React.FC<GymDetailsModuleProps> = props => {
  const router = useRouter();

  const { handleSubmit: handleSubmitUpdateGym, control, setValue } = useForm<GymDTO>();

  const { data: gymData, isLoading: gymLoading } = useGymQuery<GymDTO>({
    queryConfig: {
      queryParam: props.id,
    },
  });

  useEffect(() => {
    if (gymData) {
      setValue('id', gymData?.id);
      setValue('address', gymData?.address);
      setValue('name', gymData?.name);
      setValue('phone', gymData?.phone);
      console.log('test');
    }
  }, [gymData, setValue]);

  const { mutate } = useGymMutation<UpdateGymDTO>({
    queryConfig: {
      queryParam: props.id,
      onSuccessFn(data) {
        if (!props.id) {
          router.push(`/gym/edit/${(data as GymDTO).id}`);
        }
      },
    },
  });

  const onSubmitUpdate = handleSubmitUpdateGym((data: UpdateGymDTO) => {
    mutate(data);
  });

  const onAddNew = (type: 'Employee' | 'Manager') => {
    router.push('');
  };

  return (
    <>
      {props.show ? (
        <ShowGymDetails gym={gymData} isLoading={gymLoading} />
      ) : (
        <GymDetails isCreate={!props?.id} onSubmit={onSubmitUpdate} onAddNew={onAddNew} gym={gymData} isLoading={gymLoading} control={control} />
      )}
    </>
  );
};

export default GymDetailsModule;
