import React, { useEffect, useState } from 'react'
import '../Styles/users.css'
import { useNavigate } from 'react-router-dom'

const Users = () => {

    let [users , setUsers] = useState([])

    useEffect(() => {
        let fetchApi = async () =>{
            let url = await fetch('http://localhost:4000/users');
            let resp = await url.json()
            
            setUsers(resp)
        }
        fetchApi()
    },[users])

    let y = new Date()
    let age = y.getFullYear()

    // let navigate =  useNavigate()

    // let readBooks = (id) =>{
    //   navigate(`/adminportal/readbooks/${id}`)
    // }

    let deleteusers = (id , name) => {
        let bool = window.confirm(`Do you want to delete ${name} user....?`)
        if(bool){
          fetch(`http://localhost:4000/users/${id}`, {method : 'DELETE'});
          alert(`${name} user is deleted`)
        }
        else{
          alert('user is Not Deleted')
        }
    }

  return (
    <>
       <div className="users">
          <div className="main">
          {
            users.map((elem)=>{
              let {id,name,birthYear,imgUrl,place,email} = elem

              return(
                <div className="main">
                  <div className="card">
                    <div className="left">
                      <div className="img">
                        <img src={imgUrl} alt="" />
                      </div>
                    </div>
                    <div className="right">
                      <div className="righttext">
                      <div className="name">  {name}</div>
                      <div className="id">Id : {id}</div>
                      <div className="birth">Birth year : {birthYear}</div>
                      <div className="age">age : {age-birthYear}</div>
                      <div className="placce"> Place : {place}</div>
                      <div className="Email">{email}</div>
                      <div className="btn">
                        {/* <button onClick={ ()=>{ readBooks(id)}}>Read Books</button> */}
                        <button onClick={()=>{deleteusers(id , name)}}>Delete</button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
       </div>
    </>
  )
}

export default Users