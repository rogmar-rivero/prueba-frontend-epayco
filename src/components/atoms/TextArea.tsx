import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface Props {
  register: UseFormRegisterReturn;
  placeholder: string;
  errors?: FieldError;
  trigger: () => Promise<boolean>;
}

export const TextArea = ({ register, placeholder, trigger, errors }: Props) => {
  return (
    <>
      <textarea
        {...register}
        placeholder={placeholder}
        onBlur={() => trigger()}
        className={`textarea ${errors ? "textarea--error" : ""}`}
      />

      {errors && errors.message && (
        <span className="textarea__error">{errors.message} </span>
      )}
    </>
  );
};
