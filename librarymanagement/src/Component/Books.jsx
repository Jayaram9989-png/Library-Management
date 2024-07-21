import React, { useEffect, useState } from 'react'
import '../Styles/books.css'
import { useLocation, useNavigate } from 'react-router-dom'

const Books = () => {

    let [books , setBooks] = useState([])

    

    useEffect(() => {
        let fetchApi = async () =>{
            let url = await fetch('http://localhost:4000/books');
            let resp = await url.json()
            console.log(resp);
            setBooks(resp)
        }
        fetchApi()
    },[books])

    let navigate =  useNavigate()

    let loc = useLocation()
    let path = loc.pathname.startsWith('/adminportal');

    let readBooks = id =>{
      if(path){
        navigate(`/adminportal/readbooks/${id}`)
      }
      else{
        navigate(`/usersportal/readbooks/${id}`)
      }
    }

    let deleteBook = (id , title) => {
        let bool = window.confirm(`Do you want to delete ${title} books....?`)
        if(bool){
          fetch(`http://localhost:4000/books/${id}`, {method : 'DELETE'});
          alert(`${title}Book is deleted`)
        }
        else{
          alert('Book is Not Deleted')
        }
    }

  return (
    <>
       <div className="books">
          <div className="main">
          {
            books.map((elem)=>{
              let {thumbnailUrl,title,authors,id,pageCount,status} = elem

              return(
                <div className="main">
                  <div className="card">
                    <div className="left">
                      <div className="img">
                        <img src={thumbnailUrl} alt="" />
                      </div>
                    </div>
                    <div className="right">
                      <div className="righttext">
                      <div className="title"> Title : {title}</div>
                      <div className="id">Id : {id}</div>
                      <div className="authors">Authers : {authors}</div>
                      <div className="pagecount"> Pages : {pageCount}</div>
                      <div className="status">{status}</div>
                      <div className="btn">
                        <button onClick={ ()=>{ readBooks(id)}}>Read Books</button>
                        {path ? <button onClick={()=>{deleteBook(id , title)}}>Delete</button>: ""}
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

export default Books