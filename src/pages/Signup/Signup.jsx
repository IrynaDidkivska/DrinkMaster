import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { signupThunk } from "../../redux/Auth/operations";
import { selectIsLoading } from "../../redux/Auth/selectors";
import moment from "moment";
import "react-datetime/css/react-datetime.css";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
  const [showPassword, setShowPassword] = useState(false);
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
      dispatch(signupThunk(credentials));
    },
  });

  const handleDateChange = (name, value) => {
    // Перевірка, чи value є екземпляром moment
    const formattedDate =
      value instanceof moment ? value.format("DD/MM/YYYY") : value;

    formik.handleChange({
      target: {
        name,
        value: formattedDate,
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
          <div style={{ color: "red" }}>{formik.errors.username}</div>
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
            // onBlur={formik.handleBlur}
            onBlur={(e) => {
              formik.handleBlur(e);
              // Додайте додаткову обробку, якщо потрібно
            }}
            onChange={(value) => handleDateChange("birthdate", value)}
            // onChange={formik.handleChange}
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
          // type="password"
          type={showPassword ? "text" : "password"}
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
        {/* Eye icon to toggle password visibility */}
        <div
          style={{
            position: "absolute",
            right: "20px",
            top: "15px",
            cursor: "pointer",
            color: showPassword ? "yellow" : "red",
          }}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
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
