import React from "react";
import "./form.css";
import { useState } from "react";

const FORM = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [showData, setShowData] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    setShowData(true);
    console.log("Email:", email);
  }

  return (
    <div className="container">
      {showData && <h1>This is me {username}</h1>}
      <div className="newcont">
        <div className="box1">
          <form id="form">
            <h1 id="form-title">Registration Form</h1>
            <label for="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                console.log("Username:", e.target.value);
              }}
            />
            <label for="email"></label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log("Email:", e.target.value);
              }}
            />
            <label for="Password"></label>
            <input type="password" id="username" name="Password" />
            <button type="submit" onClick={submitHandler}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FORM;
