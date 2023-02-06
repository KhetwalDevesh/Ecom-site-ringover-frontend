import React from 'react';
import useStore from '../globalStore';
const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItemFromCart } =
    useStore();
  let subTotal = 0;
  const getSubTotal = () => {
    cartItems.map((cartItem) => {
      subTotal += cartItem.quantity * cartItem.price;
    });
  };
  getSubTotal();
  // const increaseQuantity = ({ itemId }) => {
  //   console.log('inside + ');
  //   cartItems.map((currentCartItem) => {
  //     if (currentCartItem._id === itemId) {
  //       currentCartItem.quantity += 1;
  //     }
  //     return currentCartItem;
  //   });
  //   console.log(cartItems, 'after increasing quantity');
  // };
  return (
    <div className="cart-container-out">
        <span className='cart-heading'>Cart</span>
      <div className="cart-container-in">
        {cartItems.map((item) => {
          // console.log(cartItems);
          return (
            <div
              key={item.id}
              className="cart-item-container-1">
                <img src={item.image} alt="" height="100px" width="100px" />
                <div className='cart-item-details'>
                <div className=" justify-center items-center flex">
                  {item.name}
                </div>
                <div className="quantity-container">
                  <button
                    onClick={() => decreaseQuantity({ item: item })}
                    className="w-6 bg-slate-700 text-white rounded-full"
                  >
                    -
                  </button>
                  <span className="p-3 m-1 bg-indigo-900 text-white rounded-full ">
                    Quantity ({item.quantity})
                  </span>
                  <button
                    onClick={() => increaseQuantity({ item: item })}
                    className="w-6 bg-slate-700 text-white rounded-full"
                  >
                    +
                  </button>
                </div>
                <div className=" justify-center items-center flex">
                  ₹{item.quantity*item.price}
                </div>
                </div>
            </div>
          );
        })}
        <div className='cart-end'>
          <span className="subtotal">Subtotal : ₹{subTotal}</span>
          <br />
          <button className="order-btn">
            order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;