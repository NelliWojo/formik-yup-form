import { ErrorMessage, Field, Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas/validation";

interface FormValues {
  username: string;
  email: string;
  jobType: string;
  acceptedTos: boolean;
}

export default function AdvancedForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        jobType: "",
        acceptedTos: false,
      }}
      validationSchema={advancedSchema}
      validate={(values: FormValues) => {
        const errors: Partial<FormValues> = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
