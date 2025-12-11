import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import InfoForm from "./components/Form/InfoForm";

export default function SingUp() {
  // const [flag, setFlag] = useState(true);

  return (
    <>
      <Header />

      <div className="mainDiv">
        <InfoForm button="Register" action="register" />
      </div>
    </>
  );
}

{
  /* <form className="signUp" onSubmit={submit}>
  <label htmlFor="name">Name:</label>
  <input
    type="text"
    id="name"
    placeholder="Name..."
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  {name.length === 0 && accept && (
    <p className="error">name is required</p>
  )}
  <label htmlFor="email">Email:</label>
  <input
    type="email"
    id="email"
    placeholder="email..."
    required
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  {accept && emailError === 422 && (
    <p className="error">Email has been taken</p>
  )}
  <label htmlFor="password">password:</label>
  <input
    type="password"
    id="password"
    placeholder="password..."
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  {password.length < 8 && accept && (
    <p className="error">password must be more than 8 characters</p>
  )}
  <label htmlFor="passwordr">Repeat password:</label>
  <input
    type="password"
    id="passwordr"
    placeholder="Repeat password..."
    value={passwordr}
    onChange={(e) => setPasswordr(e.target.value)}
  />
  {passwordr !== password && accept && (
    <p className="error">password does not match</p>
  )}
  <div style={{ textAlign: "center" }}>
    <button className="register" type="submit">
      <em>Register</em>
    </button>
  </div>
</form> */
}
