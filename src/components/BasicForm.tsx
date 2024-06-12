import { FormikHelpers, useFormik } from "formik";
import { basicSchema } from "../schemas/validation";

interface FormValues {
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
}

export default function BasicForm() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<FormValues>({
      initialValues: {
        email: "",
        age: 0,
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit: (
        values: FormValues,
        { setSubmitting }: FormikHelpers<FormValues>
      ) => {
        console.log("submitted", values);
        setSubmitting(false);
      },
    });

  console.log(values);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "bg-red-500" : ""}
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "bg-red-500" : ""}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "bg-red-500" : ""}
      />
      <label htmlFor="confirmPassword">Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "bg-red-500" : ""
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
}
