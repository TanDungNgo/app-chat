import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
function Chats() {
  const [chats, setChats] = useState();
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log(chats);
  return (
    <div className="chats">
      {chats ? (
        <div>
          {Object.entries(chats)?.map((chat) => (
            <div className="userChat" key={chat[0]}>
              <img src="https://gamek.mediacdn.vn/133514250583805952/2021/1/15/1-16106966278281009206635.jpg"></img>
              <div className="userChatInfo">
                <span>{chat[1].userInfo.displayName}</span>
                <p>{chat[1].userInfo.lastMessage?.text}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Chats;
