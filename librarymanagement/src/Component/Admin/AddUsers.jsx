import React, { useRef } from 'react'
import '../../Styles/addusers.css'

const AddUsers = () => {
  let name=useRef()
  let id=useRef()
  let img=useRef()
  let place=useRef()
  let birth=useRef()
  let email=useRef()

 let handleSubmit = (e)=>{
  e.preventDefault()

  let newUser = (
    {
      Id : id.current.value,
      name : name.current.value,
      birthYear : birth.current.value,
      imgUrl : img.current.value,
      place : place.current.value,
      email : email.current.value
    }
  )

  let x =fetch('http://localhost:4000/users', {
    method : "POST" ,
    headers : {'content-Type' : 'application/json'},
    body : JSON.stringify(newUser),
  })
 }
  return (
    <>
        <div className="addusers">
          <form  onSubmit={handleSubmit} className='form'>
            <input ref={name} type="text" placeholder='Enter user Name'/>
            <input ref={id} type="text" placeholder='Enter user Id'/>
            <input ref={img} type="text" placeholder='Enter user imgUrl'/>
            <input ref={birth} type="text" placeholder='Enter user Date of Birth'/>
            <input ref={email} type="text" placeholder='Enter user Email'/>
            <input ref={place} type="text" placeholder='Enter user Address'/>        
            <button>ADD USERS</button>
          </form>
        </div>
    </>
  )
}

export default AddUsers