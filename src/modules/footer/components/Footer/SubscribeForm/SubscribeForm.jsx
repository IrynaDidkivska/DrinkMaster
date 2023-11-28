import { SubscribeFormStyled } from './SubscribeForm.styled';
import { useDispatch } from 'react-redux';
import { subscribeEmail } from '../../../../../redux/Auth/operations';
import { useState } from 'react';
import { toast } from 'react-toastify';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubscribe = async event => {
    event.preventDefault();
    try {
      await dispatch(subscribeEmail({ email }));
      setEmail('');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <SubscribeFormStyled>
      <p>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter the email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </SubscribeFormStyled>
  );
};

export default SubscribeForm;
