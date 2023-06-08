import React from 'react';
import "../Styles/Cart.scss";
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {
  return (
    <div className='cart'>
      <main>

      </main>
      <aside>
        <h2>SubTotal:${2000}</h2>
        <h2>Shipping: ${200}</h2>
        <h2>Tax:${20}</h2>
        <h2>Total:${1200}</h2>
        
      </aside>
     
    </div>
  )
};
const CartItem = (imgSrc,name,price,qty,decrement,increment,deleteHandler,id) => {
    return (
      <div className='cartItem'>
          <img src={imgSrc} alt="Item" />
        <article>
          <h1>{name}</h1>
          <p>${price}</p>
        </article>
  
        <div>
  <button onClick={()=>decrement(id)}>-</button>
  <p>{qty}</p>
  <button onClick={()=>increment(id)}>+</button>
  
        </div>
        <AiFillDelete onClick={()=>deleteHandler(id)}/>
      </div>
    )
  };

export default Cart;