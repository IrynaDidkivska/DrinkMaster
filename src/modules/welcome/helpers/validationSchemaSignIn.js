import * as Yup from 'yup';

export const validationSchemaSignIn = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be less than 21 characters')
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,20}$/,
    //   'Password must have at least one uppercase letter, one lowercase letter, one digit'
    // )
    .required('Password is required'),
});
