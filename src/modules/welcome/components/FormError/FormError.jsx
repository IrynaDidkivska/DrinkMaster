import { StyledFormError } from './FormError.styled';

const FormError = ({ touched, errors, fieldName }) => {
  const getValidationMessage = fieldName => {
    switch (fieldName) {
      case 'username':
        return 'Valid username';
      case 'birthdate':
        return 'Valid birthdate format';
      case 'email':
        return 'Valid email format';
      case 'password':
        return 'Valid password';
      default:
        return 'Valid format';
    }
  };

  return (
    <StyledFormError>
      {touched && errors ? (
        <span style={{ color: '#DA1414' }}>{errors}</span>
      ) : touched && !errors ? (
        <span style={{ color: '#3CBC81' }}>
          {getValidationMessage(fieldName)}
        </span>
      ) : null}
    </StyledFormError>
  );
};

export default FormError;
