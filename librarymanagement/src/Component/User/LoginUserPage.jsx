import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginUserPage = () => {


  let userInputVal = useRef();
  let userInputPas = useRef();
  let navigate = useNavigate();



  let handleUserLogin = (e) => {
    e.preventDefault();

    let credential = {
      userName: "User",
      userPassword: "user123",
    };

    // console.log(adminInputVal.current.value);

    let {userName, userPassword} = credential

    //! Collecting input tag
    let user = userInputVal.current
    let pswd = userInputPas.current

    //!Login Valifdation
    if(userName === user.value && userPassword === pswd.value)
    {
      navigate('/usersportal')
    }else{
      user.style.cssText=`background:red`
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
    <>
        <form  onSubmit={handleUserLogin}>
            <input ref={userInputVal} type="text" placeholder='Enter User name'/>
            <input ref={userInputPas} type="password" placeholder='Enter Password' />
            <button>User Login</button>
        </form>
    </>
  )
}

export default LoginUserPage
