import React, { useRef, useState } from "react";
import '../Styles/landingpage.css'
import AdminPortal from "./Admin/AdminPortal";
import LoginAdminPage from "./Admin/LoginAdminPage";
import LoginUserPage from "./User/LoginUserPage";


const LandingPage = () => {
  let [bool, setBool] = useState(true);

  let handleClick = () => {
    setBool(!bool);
  };

  // let adminInputVal = useRef();
  // let adminInputPas = useRef();

  // let handleAdminLogin = (e) => {
  //   e.preventDefault();

  //   let credential = {
  //     adminName: "Admin",
  //     adminPassword: "Admin123",
  //   };

  //   console.log(adminInputVal.current.value);
  // };

  return (
    <>
      <div className="landing-page">
        <div className="container">
          <div className="login-container">
            <div className="btn-container">
              <div className="text">
                <div>Admin Login</div>
                <div>User Login</div>
              </div>
              <button
                onClick={handleClick}
                className={bool ? "left-btn" : "right-btn"}
              >
                {bool ? "Admin Login" : "User Login"}
              </button>
            </div>
            <div className="form-container">
              <div className="header">
                {bool ? "Admin Login" : "User Login"}
              </div>

              <div>
                {bool ? <LoginAdminPage/> : <LoginUserPage/> }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
