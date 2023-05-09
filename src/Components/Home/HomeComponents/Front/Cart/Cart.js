import React from 'react'
import { GlobalInfo } from '../../../../../App'
import { useContext } from 'react'
import "./Cart.css"


const Cart = () => {
  const {cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance} = useContext(GlobalInfo)
  console.log("cart test")
  console.log("clear cart cartjs", handleCartClearance)
  
  const totalPrice = cartItems.reduce((price, item)=> price + item.quantity * item.price, 0)


  return (
    <>
      <div className='cart-items-header'></div>
      {cartItems.length === 0 && (<div className='cart-items-empty'>
        <h3 className='heading_no_items'>No items are added</h3>
      </div>)}

      <div className='cart-items'>
        {cartItems.map((item)=>{
          return(<div key={item.id} className="cart-items-list">
            <img className='cart-items-image' src={item.image} alt={item.name}/>
            <div className='cart-items-name'>{item.name}</div>
            <div className='cart-items-price'>{item.quantity} x ${item.price}</div>
            <div className='cart-items-function'>
              <button className='cart-items-add' onClick={()=>handleAddProduct(item)}>+</button>
              <button className='cart-items-remove' onClick={()=>handleRemoveProduct(item)}>-</button>
            </div>

             {/* <div className='cart-items-total-price-name'>
              Total Price
              
              <div className='cart-items-total-price'>
                ${Math.floor(totalPrice)}
              </div>

            </div>  */}
             

          </div>)

        })}
      </div>

      {/* To make cart empty */}

        <div className='clear-cart'>
          {cartItems.length >= 1 && (
            <button className='clear-cart-button' onClick={handleCartClearance}>Clear Cart</button>
          )}
        </div>

        {/* Total Price */}

        <div className='cart-items-total-price-name'>
              
              
              <div className='cart-items-total-price'>
              <h3>Total Price : ${Math.floor(totalPrice)}
              </h3>
              </div>

            </div> 

    </>
  )
}

export default Cart;