// validationSchema.js
import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string().required("Name is required"),
  birthdate: Yup.string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Invalid date format (DD/MM/YYYY)"
    )
    .required("Date of Birth is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
      "Password must have at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .required("Password is required"),
});
