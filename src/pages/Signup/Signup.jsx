import { useFormik } from "formik";
import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { signinThunk, signupThunk } from "../../../redux/Auth/operations";
// import Datetime from "react-datetime";

// const [username, setUserName] = useState("");
// const [password, setPassword] = useState("");
// const [email, setEmail] = useState("");
// const [birthdate, setBirthdate] = useState("");

// const dispatch = useDispatch();

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const credentials = { password, email };
//   dispatch(signinThunk(credentials));
// };
// const handleDateChange = (date) => {
//   // Format the date to ISO 8601 format before setting the state
//   const formattedDate = date.format("YYYY-MM-DD");
//   setBirthdate(formattedDate);
// };

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      dateOfBirth: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      dateOfBirth: Yup.date().required("Date of Birth is required"),
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
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dateOfBirth}
        />
        {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
          <div>{formik.errors.dateOfBirth}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>

      <div>
        <button type="submit">Sign Up</button>
        <button type="button">Sign In</button>
      </div>
    </form>
  );
};

export default SignUp;
