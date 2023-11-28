// FormError.js

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
    <>
      {touched && errors ? (
        <div style={{ color: '#DA1414' }}>{errors}</div>
      ) : touched && !errors ? (
        <div style={{ color: '#3CBC81' }}>
          {getValidationMessage(fieldName)}
        </div>
      ) : null}
    </>
  );
};

export default FormError;
