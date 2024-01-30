'use client';
import { Controller } from 'react-hook-form';
import { Input } from 'antd';

export interface CustomInputProps {
  control: any;
  name: string;
  rules?: Record<string, any>;
  type: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
}

const CustomInput = ({ type = 'text', disabled = false, ...rest }: CustomInputProps) => {
  return (
    <div className="input-container">
      {rest.label && (
        <label>
          <b style={{ color: 'grey' }}>{rest.label}</b>
        </label>
      )}
      <Controller
        name={rest.name}
        control={rest?.control}
        rules={rest.rules}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            placeholder={rest.placeholder}
            disabled={disabled}
            type={type}
            className={fieldState.invalid ? 'custom-input error' : 'custom-input'}
          />
        )}
      />
    </div>
  );
};

export default CustomInput;
