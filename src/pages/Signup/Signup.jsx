import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { signinThunk } from "../../redux/Auth/operations";
import { selectUser } from "../../redux/Auth/selectors";
import AuthLink from "../../shared/components/AuthForm/AuthLink/AuthLink";
import {
  StyledCalendarSvg,
  StyledDatatimeWrapper,
  StyledDatetime,
} from "./Signup.styled";
import { SpriteSVG } from "../../shared/icons/SpriteSVG";

const SignUp = () => {
  const dispatch = useDispatch();
  const { username, password, email, birthdate } = useSelector(selectUser);

  const formik = useFormik({
    initialValues: {
      username: "",
      birthdate: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Name is required"),
      birthdate: Yup.date().required("Date of Birth is required"),
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
      const credentials = { username, password, email, birthdate };
      dispatch(signinThunk(credentials));
    },
  });

  const handleDateChange = (name, value) => {
    formik.handleChange({
      target: {
        name,
        value: value.format("YYYY-MM-DD"),
      },
    });
  };

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
        {/* <div>
          <label htmlFor="birthdate">Date of Birth</label>
          <input
            name="birthdate"
            placeholder="dd/mm/yyyy"
            type="text"
            onChange={formik.handleChange}
          />
        </div> */}
        <StyledDatatimeWrapper>
          <StyledDatetime
            type="date"
            id="birthdate"
            name="birthdate"
            timeFormat={false}
            onChange={(value) => handleDateChange("birthdate", value)}
            onBlur={formik.handleBlur}
            value={formik.values.birthdate}
            closeOnSelect={true}
          />
          <StyledCalendarSvg>
            <SpriteSVG name={"calendar"} />
          </StyledCalendarSvg>
        </StyledDatatimeWrapper>

        {formik.touched.birthdate && formik.errors.birthdate ? (
          <div>{formik.errors.birthdate}</div>
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
      <AuthLink />
    </form>
  );
};

export default SignUp;
