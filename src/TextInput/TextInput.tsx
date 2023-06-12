import { useController } from 'react-hook-form';

export interface TextInputProps {
  name: string;
  className?: string;
}

export const TextInput = ({ name, className }: TextInputProps) => {
  const { field } = useController({ name });

  return (
    <div className={className}>
      <input {...field} type="text" />
    </div>
  );
};
