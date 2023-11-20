import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { signupThunk } from "../../redux/Auth/operations";
import { selectIsLoading } from "../../redux/Auth/selectors";
import moment from "moment";
import "react-datetime/css/react-datetime.css";

import {
  StyledCalendarSvg,
  StyledDatatimeWrapper,
  StyledDatetime,
} from "./Signup.styled";
import { SpriteSVG } from "../../shared/icons/SpriteSVG";
import {
  SignButton,
  StyledAuthLink,
  StyledForm,
  Wrapper,
} from "../Signin/Signin.styled";
import Subtitle from "../../shared/components/Title/Subtitle";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const formik = useFormik({
    initialValues: {
      username: "",
      birthdate: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Name is required"),
      // birthdate: Yup.date().required("Date of Birth is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password must be less then 20 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
      const credentials = {
        username: values.username,
        birthdate: values.birthdate,
        password: values.password,
        email: values.email,
      };
      dispatch(signupThunk(credentials))
        .unwrap()
        .then(() => {
          navigate("/"); // Redirect to /home after successful login
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

  const handleDateChange = (name, value) => {
    formik.handleChange({
      target: {
        name,
        value: value instanceof moment ? value.format("YYYY-MM-DD") : value,
      },
    });
  };

  const datetimeOptions = {
    timeFormat: false,
    closeOnSelect: true,
    isValidDate: (current) => {
      return current.isBefore();
    },

    dayOfWeekFormat: "dd", // Use "dd" to start from Monday
    startOfWeek: 1, // 0 is Sunday, 1 is Monday
  };

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Subtitle Subtitle=" Sign Up" />
      <Wrapper>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div style={{ color: "DA1414" }}>{formik.errors.username}</div>
        ) : formik.touched.username && !formik.errors.username ? (
          <div style={{ color: "green" }}>Valid username</div>
        ) : null}
        <StyledDatatimeWrapper>
          <StyledDatetime
            type="date"
            id="birthdate"
            name="birthdate"
            inputProps={{ placeholder: "dd/mm/yyyy" }}
            timeFormat={false}
            onChange={(value) => handleDateChange("birthdate", value)}
            value={formik.values.birthdate}
            closeOnSelect={true}
            {...datetimeOptions}
          />

          <StyledCalendarSvg>
            <SpriteSVG name={"calendar"} />
          </StyledCalendarSvg>
        </StyledDatatimeWrapper>
        {formik.touched.birthdate && formik.errors.birthdate ? (
          <div style={{ color: "red" }}>{formik.errors.birthdate}</div>
        ) : formik.touched.birthdate && !formik.errors.birthdate ? (
          <div style={{ color: "green" }}>Valid birthdate</div>
        ) : null}

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
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : formik.touched.email && !formik.errors.email ? (
          <div style={{ color: "green" }}>Valid email</div>
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
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : formik.touched.password && !formik.errors.password ? (
          <div style={{ color: "green" }}>Valid password</div>
        ) : null}
      </Wrapper>

      <Wrapper>
        <SignButton type="submit" disabled={isLoading}>
          Sign Up
        </SignButton>
        <StyledAuthLink to="/signin">Sign In</StyledAuthLink>
      </Wrapper>
    </StyledForm>
  );
};

export default SignUp;
