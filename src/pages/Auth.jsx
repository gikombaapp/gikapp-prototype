import React, { useEffect, useState } from "react";
import { useAuthStore } from "../stores/authStore";

function AuthForm() {
  const { user, login, register, logout, loading, error, initAuth, subscribeAuth } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [view, setView] = useState("login"); // "login" or "register"

  // Initialize auth once on mount
  useEffect(() => {
    initAuth();
    subscribeAuth();
  }, []); // ✅ empty deps to avoid infinite loops

  if (loading) {
    return (
      <section className="p-5 flex justify-center items-center h-64">
        <p className="text-gray-400 text-lg">Loading...</p>
      </section>
    );
  }

  // Authenticated view
  if (user) {
    return (
      <section className="p-5 flex flex-col items-center justify-center h-64 bg-gray-100 rounded-xl shadow-md">
        <p className="text-lg font-semibold mb-4">Welcome, {user.email}</p>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </section>
    );
  }

  // Login/Register view
  return (
    <section className="p-5 flex flex-col items-center justify-center h-64 bg-gray-50 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">{view === "login" ? "Login" : "Register"}</h2>
      <div className="flex flex-col space-y-3 w-64">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          onClick={() => (view === "login" ? login(email, password) : register(email, password))}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
        >
          {view === "login" ? "Login" : "Register"}
        </button>
        <button
          onClick={() => setView(view === "login" ? "register" : "login")}
          className="text-purple-500 text-sm mt-2 hover:underline"
        >
          {view === "login" ? "Create an account" : "Already have an account?"}
        </button>
      </div>
    </section>
  );
}

export default AuthForm;
