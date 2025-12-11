import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import InfoForm from "./components/Form/InfoForm";
const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((data) => {
        (setName(data[0].name), setEmail(data[0].email));
      });
  }, []);

  return (
    <div className="mainDiv">
      <h1>Update User</h1>
      <InfoForm button="Update" name={name} email={email} action="update" />
    </div>
  );
};

export default UpdateUser;
