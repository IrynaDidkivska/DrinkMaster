import { useDispatch } from "react-redux";
import { useState } from "react";
import { signinThunk, signupThunk } from "../../../redux/Auth/operations";
import Datetime from "react-datetime";

const Test = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { password, email };
    dispatch(signinThunk(credentials));
  };
  const handleDateChange = (date) => {
    // Format the date to ISO 8601 format before setting the state
    const formattedDate = date.format("YYYY-MM-DD");
    setBirthdate(formattedDate);
  };
  return (
    <section>
      <div>
        <h1 className="mx-auto">Register</h1>
        <form onSubmit={handleSubmit}>
          {/* <input
            placeholder="Enter your name...."
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div>
            <div>
              <input
                name="number"
                placeholder="dd/mm/yyyy"
                type="string"
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
            <div>
              <Datetime
                name="date"
                type="date"
                value={birthdate}
                dateFormat="YYYY-MM-DD"
                timeFormat={false}
                onChange={handleDateChange}
                closeOnSelect={true}
              ></Datetime>
            </div>
          </div> */}
          <input
            placeholder="Enter your email...."
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Enter your pass...."
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Test;
