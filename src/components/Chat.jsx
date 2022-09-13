import React, { useContext } from "react";
import cam from "../img/cam.png";
import add from "../img/add.png";
import more from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

function Chat() {
  const { data } = useContext(ChatContext);
  // console.log("data",data);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
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
