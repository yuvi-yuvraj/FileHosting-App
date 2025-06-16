import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Config } from "../config";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(Config.API_URL + "/dashboard", {
        username,
        password,
      });

      if (response.status === 200) {
        // Store credentials in localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        // Navigate to /adminpanel
        history("/adminpanel/");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-black">
      <div className="text-center max-w-[1024px] p-8 bg-[#1e1e1e] rounded-[10px] border border-orange-400 shadow-2xl shadow-orange-200 text-white font-bold">
        <h2 className="mb-4">Login</h2>
        {error && (
          <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>
        )}
        <form className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 p-2 w-full rounded-[5px] border-none text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-2 w-full rounded-[5px] border-none text-black"
          />
          <button type="button" onClick={handleLogin}className="btn-glow-gradient mx-auto px-4 py-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;