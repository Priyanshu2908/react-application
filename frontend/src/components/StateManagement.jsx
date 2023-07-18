import React, { useState } from 'react'

const StateManagement = () => {
    const [likes, setlikes] = useState(0);
    
    const[imgUrl, setImgUrl] =useState('');

    let count=10;
    const selectfile=(e) =>{
        const file= e.target.files[0];
        console.log(file);
        //reading file


        const reader=new FileReader(file);
        reader.onload=(data)=>{
            console.log(data.target.result);
            setImgUrl(data.target.result)
        };
        reader.readAsDataURL(file)
    }
  return (
    
   <div>
     <div className='container'>
        
    <h1>Count :{count}</h1>
    <button onClick={()=>{count++; console.log(count);}}>Add Count</button>

    <h1>Likes:{likes}</h1>
    <button className='btn btn-primary' onClick={()=>{setlikes(likes+1)}}>Add Likes</button>
    <button className='btn btn-primary' onClick={()=>{setlikes(likes-1)}}>Dislike</button>

    <input type="file" onChange={selectfile} />
    <img src={imgUrl} alt="" />
    </div>
   </div>
  )
}

export default StateManagement