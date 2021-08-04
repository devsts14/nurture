import React, { useState } from "react";

const Sidenav = () => {
  const [show, setShow] = useState(false);

  const myFunction = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="sidenav">
      <ul>
        <li className="active">
          <i className="fas fa-home"></i> Add Keyword
        </li>
        <li>
          <i className="fas fa-user-friends"></i> Matches
        </li>
        <li>
          <i className="far fa-credit-card"></i> Manage sources
        </li>
        <li>
          <i className="far fa-credit-card"></i> Integration
        </li>
        <li>
          <i className="far fa-credit-card"></i>Alerts
        </li>
      </ul>
      <div class="dropdown">
        <button onClick={myFunction} className="dropbtn">
            <div>
          <i className="fas fa-star"></i> Settings{" "}
          </div>
          {show ? (
            <i className="fas fa-sort-up"></i>
          ) : (
            <i class="fas fa-sort-down"></i>
          )}{" "}
        </button>
        {show && (
          <div className="dropdown-content">
            <a href="#">Billings</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidenav;
