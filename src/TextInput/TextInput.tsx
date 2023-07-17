import { useController, useForm } from 'react-hook-form';

export interface TextInputProps {
  name: string;
  className?: string;
}

export const TextInput = ({ name, className }: TextInputProps) => {
  const { control } = useForm();
  const { field } = useController({ name, control });

  return (
    <div className={className}>
      <input {...field} type="text" />
    </div>
  );
};
