import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginAdminPage = () => {
  let adminInputVal = useRef();
  let adminInputPas = useRef();
  let navigate = useNavigate();



  let handleAdminLogin = (e) => {
    e.preventDefault();

    let credential = {
      adminName: "Admin",
      adminPassword: "admin123",
    };

    // console.log(adminInputVal.current.value);

    let {adminName, adminPassword} = credential

    //! Collecting input tag
    let admin = adminInputVal.current
    let pswd = adminInputPas.current

    //!Login Valifdation
    if(adminName ===admin.value && adminPassword === pswd.value)
    {
      navigate('/adminportal')
    }else{
      admin.style.cssText=`background:red`
      pswd.style.cssText =  `background:red`

      // let errMsz = err.current;
      // errMsz.innerText = "Wrong Credential"
      // errMsz.style.cssText= `text-align:center;
      //                        background:red
      //                         color:white
      //                         font-weight:bold
      //                         fon-family:sans-serif
      //                         font-size:10px `
    }
    }
 
  return (
    <div>
      <form onSubmit={handleAdminLogin}>
        <input ref={adminInputVal}  type="text" placeholder="Enter Admin Name" />
        <input ref={adminInputPas} type="text" placeholder="Enter Password" />
        <button>Admin Login</button>
      </form>
    </div>
  );
};

export default LoginAdminPage;
