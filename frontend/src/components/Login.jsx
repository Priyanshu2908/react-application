import React, { useState } from 'react'

const Login = () => {
    const [likes, setlikes] = useState(0);
    
    const[imgUrl, setImgUrl] =useState('');


    const selectfile=(e) =>{
        const file= e.target.files[0];
        console.log(file);
        //reading file


        
    }
  return (
    
   <div>
     <div className='container'>
        
    <h1>Login</h1>
   
    <br />
    <br />
    

    <h3>Email</h3>
    <input className='email' type="text" /> 
    <br />
    <br />
    <h3 className='password'>Password</h3>
    <input type="number" /> 
    <br />
    <br />
    <button className='btn btn-primary' onClick={()=>{setlikes(likes+1)}}>Sumit</button>
   

    
    </div>
   </div>
  )
}

export default Login           