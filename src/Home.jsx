import { useState } from "react";
import Header from "../src/components/Header";
export default function Home(){
 
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
