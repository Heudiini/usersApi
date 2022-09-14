import React from "react";
import logo from "./moke.png";

export default function User(props) {
  //console.log(props);
  let name = props.user.name;
  let company = props.user.company.name;
  let email = props.user.email;
  /*  let id = props.user.id;
  let website = props.user.website;
  let city = props.user.address.city;
  let phone = props.user.phone; */

  return (
    <div>
      <div className="card">
        <img src={logo} className="card-img-top img-rounded" alt="logo" />
        <div className="card-body">
          <h6 className="compTitle">{company}</h6>
          <h5 className="card-title">{name}</h5>
          <p className="card-title">{email}</p>
          {/*   <h6 className="card-title">Phone: {phone}</h6>
          <h5 className="card-title">{city}</h5>
          <h6 className="card-title">{website}</h6>{" "} */}

          {/*  <a href={website} className="btn btn-primary">
            website
          </a> */}
        </div>
      </div>
    </div>
  );
}
