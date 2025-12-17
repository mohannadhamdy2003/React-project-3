import { useContext, useState } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import { User } from "../context/Usercontext";
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [accept, setAccept] = useState(false);
  const usernow = useContext(User);
  console.log(usernow);
  async function submit(e) {
    e.preventDefault();
    setAccept(true);

    try {
      let res = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });

      if (res.status >= 200 && res.status <= 300) {
        // window.localStorage.setItem("Email", email);
        // const token = res.data.data.token;
        // const userdetail = res.data.data.user;
        // console.log(token);
        // console.log(userdetail);
        // usernow.setAuth({ token, userdetail });
        // window.location.pathname = "/";
        
      }
    } catch (e) {}
  }
  return (
    <>
      <Header />
      <div className="mainDiv">
        <form className="signUp" onSubmit={submit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="email..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* {accept  && (
            <p className="error">Email has been taken</p>
          )} */}
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            placeholder="password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* { accept && (
            <p className="error">password must be more than 8 characters</p>
          )} */}

          <div style={{ textAlign: "center" }}>
            <button className="register" type="submit">
              <em>Login</em>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
