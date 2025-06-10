"use client";

import Success from "./components/success";
import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const emailReg = /\w+\n*@\w.(com|net|org|io)/ig;
  const [error, setError] = useState("");
  return (
    <>
      <div className='container flex justify-center items-center'>
        <div className="left flex flex-col gap-6 text-blue-800">
          <div className="head">
            <h1 className="text-blue-800">stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on: </p>
          </div>
          <div className="check-boxs flex gap-3 flex-col">
            <div className="check-box flex justify-start items-start gap-2"><img src="../public/icon-list.svg" alt="" /><p>Product discovery and building what matters.</p></div>
            <div className="check-box flex justify-start items-start gap-2 "><img src="../public/icon-list.svg" alt="" /> <p>Measuring to ensure updates are a success</p></div>
            <div className="check-box flex justify-start items-start gap-2"><img src="../public/icon-list.svg" alt="" /><p>And much more!</p></div>
          </div>
          <form className='flex flex-col gap-3' action="">
            <div className="input flex flex-col">
              <div className="flex justify-between">
                <label htmlFor="email-address">Email address</label>
                <span className="error">{error}</span>
              </div>
              <input type="email" name='email-address' placeholder='email@company.com' required onChange={(e) => {
                setEmail(e.target.value)
              }} />
            </div>
            <button type='button' onClick={() => {
              if (emailReg.test(email)) {
                setError("")
                console.log(error);
                
                document.querySelector(".success").classList.add("index-high");
                document.querySelector(".container").classList.add("index-low")
              } else {
                setError("valid email required");
                console.log(error);
                document.querySelector("input").classList.add("error");
              }
            }}>Subscribe to monthly newsletter</button>
          </form>

        </div>
        <div className="right p-4">
          <img src="../public/illustration-sign-up-desktop.svg" alt="" />
        </div>
      </div>
      <Success email={email} />
    </>
  )
}

export default App;