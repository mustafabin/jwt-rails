import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({ name: "guest" });
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <form
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Login</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
