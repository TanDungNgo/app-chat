import React from "react";
import img from "../img/img.png";
import attach from "../img/attach.png";
function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..."></input>
      <div className="send">
        <img src={attach}></img>
        <input type="file" style={{ display: "none" }} id="file"></input>
        <label htmlFor="file">
          <img src={img}></img>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Input;
