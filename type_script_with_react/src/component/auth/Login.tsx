import React, { useState } from "react";

import { auth } from "@/config/firebase/Index";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { AddUser } from "@/Redux/UserSlice";

const Login = () => {
  const dispatch = useDispatch();

  const signInGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then((res) => {
      dispatch(AddUser(res.user));
    });
  };
  return (
    <div>
      <button
        style={{ width: "200px", height: "50px", cursor: "pointer" }}
        onClick={signInGoogle}
      >
        <img
          src="https://thegermancoder.com/wp-content/uploads/2018/09/sign_in_with_google.png"
          style={{ width: "100%" }}
          alt="img"
        />
      </button>
    </div>
  );
};

export default Login;
