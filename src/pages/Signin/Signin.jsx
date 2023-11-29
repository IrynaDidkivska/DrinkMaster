import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/Auth/selectors';
import { signinThunk } from '../../redux/Auth/operations';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  InputWrapper,
  SignButton,
  StyledAuthLink,
  StyledForm,
  Wrapper,
} from './Signin.styled';
import Subtitle from '../../shared/components/Title/Subtitle';
import { DivWrapper } from '../Signup/Signup.styled';
import { useState } from 'react';
import { loginValidationSchema } from './helpers/validationSignIn';

const SignIn = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: values => {
      const credentials = { password: values.password, email: values.email };
      dispatch(signinThunk(credentials));
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Subtitle Subtitle="Sign In" />
      <Wrapper>
        <InputWrapper
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
        <DivWrapper>
          <InputWrapper
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.values.password && ( // Check if the password field has any value
            <div
              style={{
                position: 'absolute',
                right: '20px',
                top: '20px',
                cursor: 'pointer',
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          )}
        </DivWrapper>
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
