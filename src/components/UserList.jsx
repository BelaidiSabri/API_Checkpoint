import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './UserList.css'

const UserList = () => {

  const [ListOfUser,setListOfUser]=useState([])  

  useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res=>setListOfUser(res.data))
      .catch(error => console.log(error))
},[])
  return (
    <div className='user_list'>
        <h1>User List</h1>
        <ul>
        {ListOfUser.map(e=><li>{e.name}</li>)}
        </ul>
    </div>
  )
}

export default UserList