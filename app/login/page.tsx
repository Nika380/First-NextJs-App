// pages/login.js

import React from "react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const handleSignIn = async () => {
    await signIn("credentials", { username: "admin", password: "123" });
  };

  return (
    <div>
      <h1>Login Page</h1>
      {/* <button onClick={() => handleSignIn}>Sign In</button> */}
    </div>
  );
};

export default LoginPage;
