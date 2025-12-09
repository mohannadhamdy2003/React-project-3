import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";

 const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordr, setPasswordr] = useState("");
  const [accept, setAccept] = useState(false);
  const [emailError, setEmailError] = useState();
  const { id } = useParams();
  async function submit(e) {
    // 1-on submit update the info using `http://127.0.0.1:8000/api/user/update/${id} after redirect to "/dashboard/users"`
    e.preventDefault();
    setAccept(true);
    const flag = name !== "" && password.length >= 8 && passwordr === password;
      if (!flag) return;
    try {
      let res = await axios.post(`http://127.0.0.1:8000/api/user/update/${id}`, {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordr,
      });
      // if (res.status >= 200 && res.status <= 300) {
      //   window.location.pathname = "/dashboard/users";
      // }
      if (res.status >= 200 && res.status < 300) {
        //       // window.localStorage.setItem("Email", email);
        window.location.pathname = "/dashboard/users";
        //     }
      }
    } catch (err) {
      console.log(err);
    }
  }
  //get user by id from `http://127.0.0.1:8000/api/user/showbyid/`
  useEffect(()=>{
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((data) => {(setName(data[0].name), setEmail(data[0].email));}); 
  },[])

  return (
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
            <em>Update</em>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;

// async function submit(e) {
//   // 1-on submit update the info using `http://127.0.0.1:8000/api/user/update/${id} after redirect to "/dashboard/users"`
//   e.preventDefault();
//   setAccept(true);
//   const flag = name !== "" && password.length >= 8 && passwordr === password;
//   if (!flag) return;
//   //send data
//   try {
//     let res = await axios.post(`http://127.0.0.1:8000/api/user/update/${id}`, {
//       name: name,
//       email: email,
//       password: password,
//       password_confirmation: passwordr,
//     });
//     if (res.status >= 200 && res.status < 300) {
//       // window.localStorage.setItem("Email", email);
//       window.location.pathname = "/dashboard/users";
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }
