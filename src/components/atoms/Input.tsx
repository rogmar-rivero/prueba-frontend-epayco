import { FieldError, UseFormRegisterReturn } from "react-hook-form";
interface Props {
  register: UseFormRegisterReturn;
  placeholder: string;
  errors?: FieldError;
  trigger: () => Promise<boolean>;
}

export const Input = ({ register, placeholder, errors, trigger }: Props) => {
  return (
    <>
      <input
        {...register}
        placeholder={placeholder}
        onBlur={() => trigger()}
        className={`input ${errors ? "input--error" : ""}`}
      />

      {errors && errors.message && (
        <span className="input__error">{errors.message} </span>
      )}
    </>
  );
};