import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
  email,
  password,
});


      alert("Login success: " + res.data.message);
    } catch (error) {
      alert("Error: " + error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br/>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
