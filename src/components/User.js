// User.js
import React from "react";
import logo from "./moke.png";

export default function User({ user, onClick }) {
  const { name, company, email, isSelected } = user;
  const companyName = company.name;

  return (
    <div className={`card ${isSelected ? "selected" : ""}`} onClick={onClick}>
      <img src={logo} className="card-img-top img-rounded" alt="logo" />
      <div className="card-body">
        <h6 className="compTitle">{companyName}</h6>
        <h5 className="card-title">{name}</h5>
        <p className="card-title">{email}</p>
      </div>
    </div>
  );
}
