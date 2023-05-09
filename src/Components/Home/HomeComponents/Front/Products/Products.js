import React from 'react'
import productItems from '../../Back/Data/productItems'
import "./Products.css"
import { GlobalInfo } from '../../../../../App'
import { useContext } from 'react'


const Products = () => {
    const {cartItems, handleAddProduct} = useContext(GlobalInfo)
    // console.log("Products", cartItems)
    console.log("handleadd", handleAddProduct)
  return (<>
    <div>
    <h3 className='list_of_prod'>List Of Products</h3>
    </div>
     <div className='products'>
     {productItems.map((productItem, ind)=>{
        return(
        <div className='product-card'key={ind}>
        <div>
            <img className='product-image'
                src={productItem.image}
                alt={productItem.name}
            />
        </div>

        <div className="product-name">
            <h5>{productItem.name}</h5>
        </div>
        
        <div className='product-price'>
            ${productItem.price}
        </div>


        <div>
        <button className='product-add-button' onClick={()=>handleAddProduct(productItem)}>Add To Cart</button>
        </div>
        </div>
        )
     })}
    </div>
    
</>
  )
}

export default Products