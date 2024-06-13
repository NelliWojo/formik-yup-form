import { useField } from "formik";

interface CustomInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

export default function CustomInput({
  label,
  name,
  type,
  placeholder,
}: CustomInputProps) {
  const [field, meta] = useField(name);
  // field --> onBlur() & onChange()
  console.log(field);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...field}
        className={meta.touched && meta.error ? "bg-red-500" : ""}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </>
  );
}
