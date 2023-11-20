import { useState } from "react";
import { SubscribeFormStyled } from "./SubscribeForm.styled";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const subscribe = (event) => {
    event.preventDefault();
  };
  return (
    <SubscribeFormStyled>
      <p>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <form onSubmit={subscribe}>
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
