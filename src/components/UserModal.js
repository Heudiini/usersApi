import React from "react";

export default function UserModal({ user, onClose }) {
  const { name, company, email, address, phone, website } = user;
  const companyName = company.name;

  return (
    <div className={`modal-overlay ${user ? "active" : ""}`}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>Company: {companyName}</p>
        <h3>Address</h3>
        <p>Street: {address.street}</p>
        <p>Suite: {address.suite}</p>
        <p>City: {address.city}</p>
        <p>Zipcode: {address.zipcode}</p>
        <h3>Contact</h3>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
      </div>
    </div>
  );
}
