import Image from 'next/image';
import React from 'react';
import { MdDelete } from 'react-icons/md';

const CartModal = () => {
  const cartItems = true; // Example cartItems flag, set to true for demonstration

  return (
    <div className="w-max absolute shadow-lg p-4 rounded-md top-8 -right-8 flex flex-col bg-white">
      {!cartItems ? (
        <div className="text-center">No items in cart</div>
      ) : (
        <>
          {/* Cart Item */}
          <div className="flex justify-between gap-2 text-sm rounded-sm p-2">
            <Image
              src="/iphone.jpg"
              alt="iPhone image"
              width={82}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex flex-col justify-between w-full">
              <div className="product">
                {/* Product Title and Price */}
                <div className="title pt-2 flex justify-between items-center">
                  <h3>Apple iPhone 15</h3>
                  <p className="price font-semibold">₹ 74,458</p>
                </div>
                {/* Product Description */}
                <p className="text-slate-500">Description</p>
                {/* Product Quantity and Delete Button */}
                <div className="flex justify-between items-center gap-4">
                  <div className="quantity flex items-center gap-1">
                    <button className="btn btn-sm">-</button>
                    <input type="text" value="1" className="w-8 text-center" />
                    <button className="btn btn-sm">+</button>
                  </div>
                  <button className="bg-red-500 text-white p-1 rounded-md flex items-center justify-center">
                    <MdDelete className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* Subtotal and Checkout Section */}
          <div className="subTotal mt-1">
            <div className="flex items-center justify-between text-sm font-semibold">
              <h3>Subtotal</h3>
              <p>₹ 74,458</p>
            </div>
            <p className="p-2 m-2 text-sm">
              Shipping and taxes calculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-2 px-3 ring-1 ring-gray-300">View Cart</button>
              <button className="rounded-md py-2 px-3 bg-black text-white">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
