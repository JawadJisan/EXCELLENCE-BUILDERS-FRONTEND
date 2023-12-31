import { DatePicker, DatePickerProps } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { Controller, useFormContext } from 'react-hook-form';

type UMDatePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  size?: 'large' | 'small';
};

const FormDatePicker = ({
  name,
  label,
  onChange,
  size = 'large',
}: UMDatePikerProps) => {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps['onChange'] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    // setValue(name, dateString); to get date string format
    setValue(name, date); // ISO string date format
  };

  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            defaultValue={dayjs(field.value) || ''}
            size={size}
            onChange={handleOnChange}
            style={{ width: '100%' }}
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;
