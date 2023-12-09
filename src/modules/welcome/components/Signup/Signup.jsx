import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { signupThunk } from '../../../../redux/Auth/operations';
import { selectIsLoading } from '../../../../redux/Auth/selectors';
import 'react-datetime/css/react-datetime.css';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { validationSchemaSignUp } from '../../helpers/validationSchemaSignUp.js';
import {
  DivWrapper,
  SryledLinkWrapper,
  StyleGreenSvg,
  StyleRedSvg,
  StyledCalendarSvg,
  StyledDatatimeWrapper,
  StyledDatetime,
} from './Signup.styled';
import { SpriteSVG } from '../../../../shared/icons/SpriteSVG';
import {
  InputWrapper,
  SignButton,
  StyledAuthLink,
  StyledForm,
  Wrapper,
} from '../Signin/Signin.styled';
import Subtitle from '../../../../shared/components/Title/Subtitle';
import {
  convertDateFormatHelper,
  handleDateChangeHelper,
} from '../../helpers/dataHelper.js';
import FormError from '../FormError/FormError';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const formik = useFormik({
    initialValues: {
      username: '',
      birthdate: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchemaSignUp,
    onSubmit: values => {
      const credentials = {
        username: values.username,
        birthdate: convertDateFormat(values.birthdate),
        password: values.password,
        email: values.email,
      };
      dispatch(signupThunk(credentials));
    },
  });

  const handleDateChange = (name, value) => {
    handleDateChangeHelper(formik, name, value);
  };

  const convertDateFormat = dateStr => {
    return convertDateFormatHelper(dateStr);
  };

  const datetimeOptions = {
    timeFormat: false,
    closeOnSelect: true,
    isValidDate: current => {
      return current.isBefore();
    },
    dayOfWeekFormat: 'dd',
    startOfWeek: 1,
  };

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Subtitle Subtitle=" Sign Up" />
      <Wrapper>
        <div>
          <InputWrapper
            type="text"
            id="username"
            name="username"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            $isError={
              formik.touched.username && Boolean(formik.errors.username)
            }
            $isSuccess={formik.touched.username && !formik.errors.username}
          />
          <FormError
            touched={formik.touched.username}
            errors={formik.errors.username}
            fieldName="username"
          />
        </div>

        <div>
          <StyledDatatimeWrapper>
            <StyledDatetime
              type="date"
              id="birthdate"
              name="birthdate"
              inputProps={{ placeholder: 'dd/mm/yyyy' }}
              timeFormat={false}
              onBlur={formik.handleBlur}
              onChange={value => handleDateChange('birthdate', value)}
              value={formik.values.birthdate}
              closeOnSelect={true}
              {...datetimeOptions}
            />
            <StyledCalendarSvg>
              <SpriteSVG name={'calendar'} />
            </StyledCalendarSvg>
          </StyledDatatimeWrapper>
          <FormError
            touched={formik.touched.birthdate}
            errors={formik.errors.birthdate}
            fieldName="birthdate"
          />
        </div>

        <div>
          <DivWrapper>
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
            {formik.touched.email && formik.errors.email ? (
              <StyleRedSvg>
                <SpriteSVG name={'error'} />
              </StyleRedSvg>
            ) : formik.touched.email && !formik.errors.email ? (
              <StyleGreenSvg>
                <SpriteSVG name={'done'} />
              </StyleGreenSvg>
            ) : null}
          </DivWrapper>
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
          <FormError
            touched={formik.touched.password}
            errors={formik.errors.password}
            fieldName="password"
          />
        </div>
      </Wrapper>

      <Wrapper>
        <SignButton type="submit" disabled={isLoading}>
          Sign Up
        </SignButton>

        <SryledLinkWrapper>
          <StyledAuthLink to="/signin">Sign In</StyledAuthLink>
          <StyledAuthLink to="/welcome">Welcome</StyledAuthLink>
        </SryledLinkWrapper>
      </Wrapper>
    </StyledForm>
  );
};

export default SignUp;
