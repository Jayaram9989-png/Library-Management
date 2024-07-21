import React, { useRef } from 'react'
import './addbooks.css'

const AddBooks = () => {

  let bookTitle=useRef()
  let imgUrl=useRef()
  let athr=useRef()
  let cat=useRef()
  let pages=useRef()
  let status = useRef()

  let handleSubmit = (e) =>{
    e.preventDefault()

    let newBooks ={
      title : bookTitle.current.value,
      thumbnailUrl : imgUrl.current.value,
      authors : [athr.current.value],
      categories : [cat.current.value],
      pageCount : pages.current.value,
      status : status.current.value
    };

    let x = fetch('http://localhost:4000/books' , {
      method : 'POST',
      headers : {'content-Type' : 'application/json'},
      body : JSON.stringify(newBooks),
    });
    
  }


  return (
    <>
        <div className="body">
        <div className="main">
            <form className='form' onSubmit={handleSubmit}>
               <div className="input">
               <input ref={bookTitle} type="text"  placeholder='Enter Book Title'/>
                <input ref={imgUrl} type="text" placeholder='Enter Iamge url'/>
                <input ref={athr} type="text" placeholder='Enter Authors'/>
                <input ref={cat} type="text" placeholder='Enter Category'/>
                <input ref={pages} type="text" placeholder='Enter pages'/>
                <input ref={status} type="text" placeholder='Enter status' />
                <input type="text" />
               </div>
                <button>ADD BOOKS</button>
            </form>
        </div>
        </div>
    </>
  )
}

export default AddBooks