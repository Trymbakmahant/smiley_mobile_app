import React, {createContext, useContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loginPending, setLoginPending] = useState(false);
  const [userdata, setUserdata] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginPending,
        setLoginPending,
        userdata,
        setUserdata,
        login: async (email, password) => {
          try {
            setLoginPending(true);
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email, password) => {
          try {
            setLoginPending(true);
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async (email, password) => {
          try {
            setLoginPending(true);
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useLogin = () => useContext(AuthContext);

export default AuthProvider;
