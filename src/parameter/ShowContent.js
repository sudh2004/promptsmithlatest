import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function ShowContent({children}) {

    const [showcontent,setcontent] = useState(false)
    const location = useLocation()
    useEffect(()=>{
        if(location.pathname === '/' 
        || location.pathname === '/promptchat' 
        || location.pathname==='/login' 
        || location.pathname==="/signup" 
        || location.pathname==="/forgot-password"){
            setcontent(false);
        }else{
            setcontent(true);
        }
    },[location])
  return (
    <div>
      {showcontent && children}
    </div>
  )
}

export default ShowContent
