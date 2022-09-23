import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({ name: "" });
  const [form, setForm] = useState({});
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setUser({
          name: data.user.email,
        });
      });
  };
  let updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    let token = localStorage.getItem("jwt");
    if (token && !user.name) {
      fetch("http://127.0.0.1:3000/profile", {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser({
            name: data.email,
          });
        });
    }
  }, []);

  return (
    <div className="App">
      <h1>{!user.name ? "Guest" : user.name}</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Login</h1>
        <button
          onClick={() => {
            localStorage.clear();
            setUser({
              name: "",
            });
          }}
        >
          LOG OUT
        </button>
        <input
          onChange={updateForm}
          name="email"
          type="text"
          placeholder="email"
        />
        <input
          onChange={updateForm}
          name="password"
          type="password"
          placeholder="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
