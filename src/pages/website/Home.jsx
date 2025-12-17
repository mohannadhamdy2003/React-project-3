import { useContext, useState } from "react";
import Header from "../../components/Header";
import { User } from "./context/Usercontext";
export default function Home() {
  const user=useContext(User)
  console.log(user);
  return (
    <>
      <Header />
      <div>
        <h1 className=" text-purple-600 font-bold">Home</h1>
        <button className="px-6 py-3 rounded-full bg-green-500 text-white hover:bg-green-600">
          submit
        </button>
      </div>
    </>
  );
}
