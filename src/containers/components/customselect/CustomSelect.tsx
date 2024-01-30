'use client';
import { Controller } from 'react-hook-form';
import Select, { ActionMeta, GroupBase, OptionsOrGroups } from 'react-select';

export interface CustomSelectProps {
  control: any;
  name: string;
  rules?: Record<string, any>;
  label?: string;
  options?: OptionsOrGroups<any, GroupBase<any>> | undefined;
  defaultvalue?: any;
  onChange?: ((newValue: any, actionMeta: ActionMeta<any>) => void) | undefined;
  ref?: any;
}

const CustomSelect: React.FC<CustomSelectProps> = props => {
  return (
    <div className="input-container">
      {props.label && (
        <label>
          <b style={{ color: 'grey' }}>{props.label}</b>
        </label>
      )}
      <Controller
        name={props.name}
        control={props?.control}
        rules={props.rules}
        render={({ field, fieldState }) => (
          <Select
            options={props.options}
            defaultValue={props.options && props.options.find(c => c.value === props.defaultvalue)}
            value={props.options && props.options.find(c => c.value === fieldState)}
            onChange={props.onChange ? props.onChange : val => field.onChange(val.value)}
            ref={props?.ref}
          />
        )}
      />
    </div>
  );
};

export default CustomSelect;
