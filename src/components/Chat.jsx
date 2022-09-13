import React from "react";
import cam from "../img/cam.png";
import add from "../img/add.png";
import more from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jerry</span>
        <div className="chatIcons">
          <img src={cam}></img>
          <img src={add}></img>
          <img src={more}></img>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
