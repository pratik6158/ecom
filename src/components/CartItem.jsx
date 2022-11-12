import React from 'react'

const CartItem = ({id,name,price,image}) => {
  return (
    <article className='cart-item'>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button
          className='remove-btn'
          // onClick={() => remove(id)}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase price */}
        <button className='price-btn' onClick={() => increase(id)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        {/* price */}
        <p className='price'>{price}</p>
        {/* decrease price */}
        <button className='price-btn' 
        // onClick={() => decrease(id)}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </article>
  )
}

export default CartItem