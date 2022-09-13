import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { unstable_batchedUpdates } from "react-dom";
import { auth } from "../firebase";
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      unsub();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
