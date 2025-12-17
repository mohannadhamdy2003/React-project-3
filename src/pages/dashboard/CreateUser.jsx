import React from "react";
import InfoForm from "../../components/Form/InfoForm";

const CreateUser = () => {
  return (
    <div className="mainDiv">
      <h1>Create User</h1>
      <InfoForm button="Create User" endpoint="user/create" />
    </div>
  );
};

export default CreateUser;
