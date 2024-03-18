import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
export const basicSchema = yup.object().shape({
  email: yup.string().email("Enter a Valid Email").required("Required"),
  name: yup.string(),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, "Enter a Stronger Password")
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must Match"),
    
});
