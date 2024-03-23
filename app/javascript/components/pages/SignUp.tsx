import React, { useState } from "react";
import { currentUser } from "../../context";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": (
          document.querySelector("[name='csrf-token']") as HTMLMetaElement
        )?.content,
      },
      body: JSON.stringify({
        user: { name: "test", email: email, password: password },
      }),
    })
      .then((response) => {
        if (response.ok) {
          const token = response.headers.get("Authorization");
          localStorage.setItem("jwt", token);
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => {
        currentUser(response.data);
        console.log("response:", response.data);
        navigate("/");
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };

  const handlePasswordConfirmationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirmation(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <label>
          Password Confirmation:
          <input
            type="password"
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
