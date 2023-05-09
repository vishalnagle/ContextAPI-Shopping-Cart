import React from 'react'
import Products from './HomeComponents/Front/Products/Products.js'

const Home = () => {
  // const handleClick=()=>{
  //   localStorage.clear();
  //   window.location.reload();
  // }
  
  return (
    <div>
    {/* <button onClick={handleClick}>Logout</button> */}
      <Products />
      
    </div>
  )
}

export default Home