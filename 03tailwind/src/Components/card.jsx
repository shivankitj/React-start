import React from 'react'

const Card = ({username}) => {
// const Card = (props) => {
  return (
    <div>
        <img src="https://images.pexels.com/photos/9032097/pexels-photo-9032097.jpeg" alt="React logo" />
        <h1 className='text-2xl bg-green-500 p-3 rounded'>A card of pics {username}</h1>
        {/* <h1 className='text-2xl bg-green-500 p-3 rounded'>A card of pics {props.username}</h1> */}
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}






export default Card
