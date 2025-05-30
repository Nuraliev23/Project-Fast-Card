import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import toast from "react-hot-toast";

import oplata from "@images/Frame 834.png";
import { NavLink } from "react-router";

import api from "../../shared/ConfigJs/api"

import { clearCart, getCart } from "../../entities/Cart/cartSlice";

const Checkout = () => {
  let {cartData} = useSelector((store) => store.cart);
  let {totalPrice} = useSelector((store) => store.cart);
  let {discountPrice} = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);

function post() {
  toast.success('Purchase successful')
}

  return (
    <div>
      <div className="pt-[60px] pb-[40px] max-w-[1200px] m-auto">
        Home / View Cart / CheckOut
      </div>
      <section className="flex flex-col md:flex-row justify-between max-w-[1200px] mx-auto items-center gap-[30px]">
        <div className="md:w-[47%] w-[96%]   bg-white shadow-md rounded-md p-8 mt-10">
          <h2 className="text-3xl   mb-6">Billing Details</h2>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm text-gray-600">First name</label>
              <input
                //   value={user.name}
                type="text"
                placeholder=""
                className="w-full border rounded px-4 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Last name</label>
              <input
                //   value={user.name}
                type="text"
                placeholder=""
                className="w-full border rounded px-4 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Street address</label>
              <input
                type="text"
                className="w-full border rounded px-4 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">
                Apartment, floor, etc. (optional)
              </label>
              <input
                //   value={user.email}
                type="email"
                placeholder=""
                className="w-full border rounded px-4 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Town/City</label>
              <input
                type="text"
                className="w-full border rounded px-4 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Phone number</label>
              <input
                type="text"
                className="w-full border rounded px-4 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email address</label>
              <input
                type="text"
                className="w-full border rounded px-4 py-2 mt-1"
              />
            </div>
          </div>

          <div className="flex justify-start gap-4 mt-8">
            <input type="checkbox" className="accent-[red]" checked={true} />
            <button className="text-gray-600 hover:underline">
              Save this information for faster check-out next time
            </button>
          </div>
        </div>

        <div className="md:w-[45%] w-[90%]">
          <div className=" ">
            {Array.isArray(cartData) &&
              cartData.map((el) => {
                return (
                  <div key={el.id} className="flex mb-2">
                    <div className="flex items-center gap-4 p-[4px] justify-between  w-[100%]">
                      <div className="flex items-center gap-4 p-[4px]">
                        <img
                          src={
                            el.product.image
                              ? `${api}/images/${el.product.image}`
                              : "placeholder.jpg"
                          }
                          alt={el.product.productName}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <span className="font-medium">
                          {el.product.productName}
                        </span>
                      </div>
                      <p className="py-4 px-4 text-black font-medium">
                        ${el.quantity * el.product.price}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>$ {totalPrice}</span>
          </div>
          <div className="flex justify-between mb-4 border-b-[1px] border-[#8080807e] pb-[16px]">
            <span>Shipping:</span>
            <span>$ {discountPrice}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mb-6">
            <span>Total:</span>
            <span>$ {totalPrice - discountPrice}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-[16px] items-center">
              <input type="radio" name="rad" className="accent-black cursor-pointer" />
              <p>Bank</p>
            </div>
            <img src={oplata} alt="" />
          </div>
          <div className="flex gap-[16px] items-center">
            <input type="radio" name="rad" className="accent-black cursor-pointer" />
            <p>Cash on delivery</p>
          </div>
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
          <button onClick={()=>{post()
            dispatch(clearCart())
          }} className="w-[60%] bg-red-500 hover:bg-red-600 text-white py-3 rounded-md transition mt-[30px] cursor-pointer">
          <NavLink to="/">Place Order</NavLink>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
