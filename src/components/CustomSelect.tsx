import { useField } from "formik";

interface CustomSelectProps {
  label: string;
  name: string;
  placeholder: string;
  children: React.ReactNode;
}

export default function CustomSelect({
  label,
  name,
  placeholder,
  children,
}: CustomSelectProps) {
  const [field, meta] = useField(name);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        placeholder={placeholder}
        {...field}
        className={meta.touched && meta.error ? "bg-red-500" : ""}
      >
        {children}
      </select>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </>
  );
}
