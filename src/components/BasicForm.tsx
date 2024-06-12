import { FormikHelpers, useFormik } from "formik";

interface FormValues {
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
}

export default function BasicForm() {
  const {values, handleChange, handleBlur} = useFormik<FormValues>({
    initialValues: {
      email: "",
      age: 0,
      password: "",
      confirmPassword: "",
    },
    onSubmit: (
      values: FormValues,
      { setSubmitting }: FormikHelpers<FormValues>
    ) => {
      console.log(values);
      setSubmitting(false);
    },
  });
    console.log(values)

  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
