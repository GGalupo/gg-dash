import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup.string().required("E-mail is required!").email("Invalid e-mail."),
  password: yup.string().required("Password is required!"),
});

export const createUserSchema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  email: yup.string().required("E-mail is required!").email("Invalid e-mail."),
  password: yup
    .string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 chars long."),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Password and confirmation must match."),
});
