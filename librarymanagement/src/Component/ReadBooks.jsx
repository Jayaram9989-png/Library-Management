import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import '../Styles/readbooks.css'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const ReadBooks = () => {

    let [book , setBook]=useState([])
    let params = useParams()
    let bookId = params.id;

    let loc = useLocation()
    let path = loc.pathname.startsWith('/adminportal');

    useEffect(()=>{
        let fetchApi = async ()=>{
            let url = await fetch(`http://localhost:4000/books/${bookId}`)
            let resp =await url.json()
            setBook(resp);
        }
        fetchApi()
    },[book])

    let [short , setShort]=useState(true)

    let handleShortDesc = ()=>{
        setShort(!short)
    }

    let [long , setLong]=useState(true)

    let handleLongDesc = ()=>{
        setLong(!long)
    }

    let navigate =  useNavigate()

    let books = () =>{
    if(path){
            navigate(`/adminportal/books`)
        }
     else{
        navigate(`/usersportal/books`)
     }   
  }

    let {thumbnailUrl,title,shortDescription,longDescription,status,pageCount,categories}=book
  return (
    <>
       <div className="container">
        < div className="card">

            <div className="left">
                <div className="left-card">
                <div className="img">
                    <img src={thumbnailUrl} alt="" />
                </div>
                <div className="title">{title}</div>
                </div>
            </div>
            <div className="right">
                <div className="right-card">
                    <div className="short-button">
                        <div onClick={handleShortDesc} className='header'>
                            <div>Short Description</div>
                            <div>{short ? (<KeyboardDoubleArrowDownIcon/>) :              (<KeyboardDoubleArrowUpIcon/>)}</div>
                        </div> 
                    </div>
                    <div className="short-description">{short ? "" : shortDescription}</div>
                    <div className="long-button">
                        <div onClick={handleLongDesc} className='header'>
                            <div>Long Description</div>
                            <div>{long ? (<KeyboardDoubleArrowDownIcon/>) : (<KeyboardDoubleArrowUpIcon/>)}</div>
                        </div>
                    </div>
                    <div className="long-descriptio">{long ? "" : longDescription}</div>
                </div>
                <div className="mainbox">
                    <div className="box">
                        <div className='a'>Status</div>
                        <div className='b'>{status}</div>
                    </div>
                    <div className="box">
                        <div className='a'>PageCount</div>
                        <div className='b'>{pageCount}</div>
                    </div>
                    <div className="box">
                        <div className='a'>Categories</div>
                        <div className='b'>{categories}</div>
                    </div>
                </div>
                <div className="backarrow" onClick={books}><KeyboardDoubleArrowLeftIcon/><button>BACK</button></div>
            </div>

        </div>
       </div>
    </>
  )
}

export default ReadBooks