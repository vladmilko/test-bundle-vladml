import { useController, useForm } from 'react-hook-form';

export interface TextInputProps {
  name: string;
  placeholder: string;
  className?: string;
}

export const TextInput = ({ name, className, placeholder }: TextInputProps) => {
  const { control } = useForm();
  const { field } = useController({ name, control });

  return (
    <div className={className}>
      <input {...field} type="text" placeholder={placeholder} />
    </div>
  );
};
