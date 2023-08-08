import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div>
      <h1 title="Login"> Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button disabled="true">Login</button>
    </div>
  );
};

export default Login;
