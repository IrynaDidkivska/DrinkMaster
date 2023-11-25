import { SubscribeFormStyled } from "./SubscribeForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { subscribeEmail } from "../../../../../redux/Auth/operations";
import { selectSubscribe } from "../../../../../redux/Auth/selectors";
import { useState } from "react";
import { toast } from "react-toastify";

const SubscribeForm = () => {
  const isSubscribed = useSelector(selectSubscribe);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubscribe = (event) => {
    event.preventDefault();
    dispatch(subscribeEmail(event));
    if (isSubscribed) {
      toast.error(`Your email address has already been subscribed`);
    }
    toast.success(`Contact ${email} successfully added!`);
    setEmail("");
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </SubscribeFormStyled>
  );
};

export default SubscribeForm;
