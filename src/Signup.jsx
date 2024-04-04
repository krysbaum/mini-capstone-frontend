import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/products"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        setStatus(error.response.status);
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="p-6 mx-auto">
      <h1 className="text-xl font-medium text-orange-900">Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>
            {error}
            <div>{status ? <img src={`https://http.cat/${status}`} /> : null}</div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name:{""}
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="name"
            type="text"
            className="p-1 bg-orange-100 rounded-xl text-orange-800 focus:outline-none"
          />
          <small>{20 - name.length} characters remaining</small>
        </div>
        <div>
          Email:{" "}
          <input name="email" type="text" className="p-1 bg-orange-100 rounded-xl text-orange-800 focus:outline-none" />
        </div>
        <div>
          Password:{" "}
          <input
            name="password"
            type="text"
            className="p-1 bg-orange-100 rounded-xl text-orange-800 focus:outline-none"
          />
        </div>
        <div>
          Password confirmation:{" "}
          <input
            name="password_confirmation"
            type="text"
            className="p-1 bg-orange-100 rounded-xl text-orange-800 focus:outline-none"
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
