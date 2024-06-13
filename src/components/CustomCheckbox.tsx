import { useField } from "formik";

interface CustomInputProps {
  name: string;
  type: string;
}

export default function CustomCheckbox({ name, type }: CustomInputProps) {
  const [field, meta] = useField(name);

  return (
    <>
      <input
        id={name}
        type={type}
        {...field}
        className={meta.touched && meta.error ? "bg-red-500" : ""}
      />
      <span>I accept the terms of service</span>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </>
  );
}
