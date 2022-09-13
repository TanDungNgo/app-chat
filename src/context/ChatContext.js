import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { unstable_batchedUpdates } from "react-dom";
import { auth } from "../firebase";
export const ChatContext = createContext();

function ChatContextProvider({ children }) {
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };
  const chatReducer = (state, action) => {};
  return (
    <ChatContext.Provider value={{ currentUser }}>
      {children}
    </ChatContext.Provider>
  );
}

export default AuthContextProvider;
