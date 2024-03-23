import React from "react";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    console.log("Logging out...", localStorage.getItem("jwt"));
    await fetch("http://localhost:3000/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt"),
        "X-CSRF-Token": (
          document.querySelector("[name='csrf-token']") as HTMLMetaElement
        )?.content,
      },
    })
      .then((response) => {
        if (response.ok) {
          localStorage.removeItem("jwt");
          navigate("/signin");
        }
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
