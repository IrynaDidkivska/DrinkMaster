import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/Auth/selectors";
import { signinThunk } from "../../redux/Auth/operations";
import {
  SignButton,
  StyledAuthLink,
  StyledForm,
  Wrapper,
} from "./Signin.styled";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Subtitle from "../../shared/components/Title/Subtitle";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
      const credentials = { password: values.password, email: values.email };
      dispatch(signinThunk(credentials))
        .unwrap()
        .then(() => {
          navigate("/home"); // Redirect to /home after successful login
        })
        .catch((error) => {
          const { message } = error.response.credentials;
          if (message.length > 5) {
            toast.error(message);
          } else {
            message.forEach((el) => toast.error(el));
          }
        });
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Subtitle Subtitle=" Sign In" />
      <Wrapper>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </Wrapper>

      <Wrapper>
        <SignButton type="submit" disabled={isLoading}>
          Sign In
        </SignButton>
        <StyledAuthLink to="/signup">Sign Up</StyledAuthLink>
      </Wrapper>
    </StyledForm>
  );
};

export default SignIn;
