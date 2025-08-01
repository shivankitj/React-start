import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    

    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/shivankitj')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })

    // },[])

    const data = useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github follower : {data?.followers}
        <img src={data?.avatar_url} width={300} alt="Github Logo" />
    </div>
  )
}

export default Github

export const gitHubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/shivankitj')
    return response.json()
}