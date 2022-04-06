import React, { useState } from "react";
import "./formstyle.css";

function FormInp() {
  const [username, setusername] = useState("");
  const [phone, setphone] = useState("");

  const userhandler = (event) => {
    setusername(event.target.value);
  };
  const phonehandler = (event) => {
    setphone(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();
    if (phone.length !== 10) {
      alert("pls enter a valid phone number");
      return;
    }
    if (username === "" && phone === "") {
      alert("pls fill the form before submitting");
    } else {
      alert("thank you for submitting");
    }
    setusername('')
    setphone('')
  };

  return (
    <div className="main">
      <form>
        <div>
          <label className="lab">username</label>
          <input
            className="inp"
            type="text"
            value={username}
            onChange={userhandler}
          ></input>
          <br></br>
          <label className="lab">Phone</label>
          <input
            className="inp"
            type="number"
            value={phone}
            onChange={phonehandler}
            max={10}
          ></input>
        </div>
        <button
          className="btn"
          type="submit"
          onClick={submithandler}
          disabled={!username.length && !phone.length}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default FormInp;
