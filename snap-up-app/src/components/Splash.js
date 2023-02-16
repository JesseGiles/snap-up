import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Splash() {
  const navigate = useNavigate();

  const redirectingUser = () => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };

  return (
    <div className="splash-screen">
      
      {redirectingUser()}
    </div>
  );
}
