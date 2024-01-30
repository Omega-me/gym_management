'use client';
import { EmployeeDTO } from '@/common/dto';
import { eApiRoutes, eHttpMethod } from '@/common/enums';
import { Employees } from '@/containers/components';
import { useEmplyeeMutation, useEmplyeeQuery } from '@/hooks/useEmployee';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const EmployeesModule = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [id, setId] = useState<null | number>(null);
  const { data: employees, isLoading: employeeLoading } = useEmplyeeQuery<EmployeeDTO[]>();

  const { mutate: remove } = useEmplyeeMutation({
    httpConfig: {
      methode: eHttpMethod.DELETE,
    },
    queryConfig: {
      queryParam: id?.toString(),
      onSettled() {
        queryClient.invalidateQueries({
          queryKey: [eApiRoutes.EMPLOYEES],
        });
      },
    },
  });

  const onDelete = (id: number) => {
    setId(id);
    if (id) {
      remove({});
    }
  };

  const onAddNew = () => {
    router.push(`${eApiRoutes.EMPLOYEES}/create`);
  };
  return <Employees data={employees} isLoading={employeeLoading} onAddNew={onAddNew} onDelete={onDelete} />;
};

export default EmployeesModule;
