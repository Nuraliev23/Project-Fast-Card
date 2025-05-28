import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router";
import api from "../../shared/ConfigJs/api"

import toast from "react-hot-toast";
import { clearCart, deleteFromCart, getCart, increaseCart, reduceCart } from "../../entities/Cart/cartSlice";

function erpost() {
  toast.success("Product successfully removed from cart");
}

const Cart = () => {
  let {cartData} = useSelector((store) => store.cart);

  
  let {totalPrice} = useSelector((store) => store.cart);
  let {discountPrice} = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
    // dispatch(get());
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-3 min-w-[600px] max-w-[1200px] mx-auto">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th className="py-2">Product</th>
              <th className="py-2">Price</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
          {
 cartData?.map((el) => (
    <tr key={el.id} className="bg-white shadow rounded-lg">
      <td className="py-4 px-4">
        <div className="flex items-center gap-4">
          <img
            src={
              el.product?.image
                ? `${api}/images/${el.product.image}`
                : "placeholder.jpg"
            }
            alt={el.product?.productName || "Product"} 
            className="w-16 h-16 object-cover rounded"
          />
          <span className="font-medium">
            {el.product?.productName || "Unknown Product"}
          </span>
        </div>
      </td>
      <td className="py-4 px-4 text-black font-medium">
        ${el.product?.price ?? "0.00"}
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(reduceCart(el.id))}
            className="border rounded px-2 cursor-pointer"
          >
            -
          </button>
          <span>{String(el.quantity).padStart(2, "0")}</span>
          <button
            onClick={() => dispatch(increaseCart(el.id))}
            className="border rounded px-2 cursor-pointer"
          >
            +
          </button>
        </div>
      </td>
      <td className="py-4 px-4 flex items-center gap-4">
        <span className="font-semibold">
          ${el.product?.price ? el.quantity * el.product.price : "0.00"}
        </span>
        <button
          onClick={() => {dispatch(deleteFromCart(el.id))
            erpost()
          }}
          className="text-red-500 hover:text-red-700 text-xl cursor-pointer"
        >
          ❌
        </button>
      </td>
    </tr>
  ))
}

          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-6 max-w-[1200px] mx-auto w-[90%]">
        <button className="border px-6 py-2 rounded hover:bg-gray-100">
          <NavLink to="/products">Return To Shop</NavLink>
        </button>
        <div className="flex gap-4">
          <button className="border px-6 py-2 rounded hover:bg-gray-100 hidden md:inline">
            Update Cart
          </button>
          <button
            onClick={() => {dispatch(clearCart())
              
            }}
            className="border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-50 cursor-pointer"
          >
            Remove all
          </button>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex justify-between mt-[80px] items-start flex-col md:flex-row">
        <div className="flex justify-between mt-6 gap-[16px] mx-auto">
          <button className="border px-6 py-2 rounded hover:bg-gray-100">
            <NavLink to="/products">Coupon Code</NavLink>
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-50"
            >
              Apply
            </button>
          </div>
        </div>

        <div className="border p-6 rounded-md md:w-[40%] w-[90%] mx-auto mt-10 text-center">
          <h2 className="text-xl font-semibold mb-4">Cart Total</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>$ {totalPrice}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping:</span>
            <span>$ {discountPrice}</span>
          </div>

          <hr className="mb-4" />

          <div className="flex justify-between text-lg font-semibold mb-6">
            <span>Total:</span>
            <span>$ {totalPrice-discountPrice}</span>
          </div>

          <button className="w-[60%] bg-red-500 hover:bg-red-600 text-white py-3 rounded-md transition">
          <NavLink to="/checkout">Procees to checkout</NavLink>

          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
