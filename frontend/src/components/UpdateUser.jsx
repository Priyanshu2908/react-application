import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UpdateUser = () => {
  const{id}=useParams();
  const fetchUserData = async()=>{
    const res = await fetch('http://localhost:5000/user/getbyid/'+id);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
  }

  useEffect(()=>{
    fetchUserData();

  },[]);

  return (
    <div>
      <h1 className='text-center'>Update User Data</h1>
      <h2>{id}</h2>
    </div>
  )
}

export default UpdateUser