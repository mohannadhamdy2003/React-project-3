import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";

export default function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordr, setPasswordr] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState();
  // const [flag, setFlag] = useState(true);
  async function submit(e) {
    e.preventDefault();
    setAccept(true);
    const flag = name !== "" && password.length >= 8 && passwordr === password;

    if (!flag) return;

    //send data
    try {
      let res=await axios
        .post("http://127.0.0.1:8000/api/register", {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordr,
        })
        if (res.status >= 200 && res.status < 300) {
          // window.localStorage.setItem("Email", email);
          window.location.pathname = "/login";
        }
        // .then((res) => console.log(res));
       
    } catch (e) {
      setEmailError(e.response.status);
    }
  }
  return (
    <>
    <Header />

      <div className="mainDiv">
        <form className="signUp" onSubmit={submit}>
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
        </form>
      </div>
    </>
  );
}
