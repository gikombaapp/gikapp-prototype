import React, { useEffect, useState } from "react";
import { useAuthStore } from "../stores/authStore";

function AuthForm() {
  const { user, login, register, logout, loading, error, initAuth, subscribeAuth } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    initAuth();
    subscribeAuth();
  });

  if (loading) return <p>Loading...</p>;

  if (user) {
    return (
      <div>
        <p>Welcome, {user.email}</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => login(email, password)}>Login</button>
      <button onClick={() => register(email, password)}>Register</button>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default AuthForm;
