import * as yup from "yup";

export const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail is required!").email("Invalid e-mail"),
  password: yup.string().required("Password is required!"),
});
