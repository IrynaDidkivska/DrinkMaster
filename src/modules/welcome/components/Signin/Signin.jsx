import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { selectIsLoading } from '@/redux/Auth/selectors';
import { signinThunk } from '@/redux/Auth/operations';
import { validationSchemaSignIn } from '../../helpers/validationSchemaSignIn';
import { getWakeUpServer } from '@/shared/services/api-service';

import FormError from '../FormError/FormError';

import {
  InputWrapper,
  SignButton,
  SryledLinkWrapper,
  StyledAuthLink,
  StyledForm,
  StyledSubitleContent,
  StyledSubtitleWrapper,
  StyledTextFocus,
  Wrapper,
} from './Signin.styled';
import Subtitle from '@/shared/components/Title/Subtitle';
import { DivWrapper } from '../Signup/Signup.styled';

const SignIn = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    getWakeUpServer();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: 'test-user@gmail.com',
      password: '123456',
    },
    validationSchema: validationSchemaSignIn,
    onSubmit: values => {
      const credentials = { password: values.password, email: values.email };
      dispatch(signinThunk(credentials));
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledSubtitleWrapper>
        <Subtitle Subtitle="Sign In" />
        <StyledSubitleContent>
          <div>*you can also use a test credentials</div>
          <div>
            only <StyledTextFocus>press Signin button</StyledTextFocus>
          </div>
        </StyledSubitleContent>
      </StyledSubtitleWrapper>

      <Wrapper>
        <div>
          <InputWrapper
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            $isError={formik.touched.email && Boolean(formik.errors.email)}
            $isSuccess={formik.touched.email && !formik.errors.email}
          />
          <FormError
            touched={formik.touched.email}
            errors={formik.errors.email}
            fieldName="email"
          />
        </div>
        <div>
          <DivWrapper>
            <InputWrapper
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              $isError={
                formik.touched.password && Boolean(formik.errors.password)
              }
              $isSuccess={formik.touched.password && !formik.errors.password}
            />
            {formik.values.password && (
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
          <FormError
            touched={formik.touched.password}
            errors={formik.errors.password}
            fieldName="password"
          />
        </div>
      </Wrapper>

      <Wrapper>
        <SignButton type="submit" disabled={isLoading}>
          Sign In
        </SignButton>
        <SryledLinkWrapper>
          <StyledAuthLink to="/signup">Sign Up</StyledAuthLink>
          <StyledAuthLink to="/welcome">Welcome</StyledAuthLink>
        </SryledLinkWrapper>
      </Wrapper>
    </StyledForm>
  );
};

export default SignIn;
