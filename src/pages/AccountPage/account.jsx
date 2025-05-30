import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { GetUserId } from "../../entities/counterSlice";

const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.counter.user);

  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");

  const token = localStorage.getItem("Token");

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded?.sid) {
          dispatch(GetUserId(decoded.sid));
        } else {
          console.warn("SID не найден в токене");
        }
      } catch (error) {
        console.error("Ошибка при декодировании токена:", error);
      }
    }
  }, [token, dispatch]);
  useEffect(() => {
    if (user) {
      if (user.name) setFirstname(user.name);
      if (user.email) setEmail(user.email);
    }
  }, [user]);

  return (
    <div>
      <section className="max-w-[1200px] mx-auto w-[90%] md:w-full">
        <div className="pt-[60px] pb-[40px]">Home / Contact</div>
        <div className="flex flex-col md:flex-row justify-between w-[90%] mx-auto md:w-[100%]">
          <aside>
            <div className="flex flex-col gap-[24px]">
              <h2>Manage My Account</h2>
              <div className="pl-[20px]">
                <p className="text-red-500">My Profile</p>
                <p className="text-[#00000061]">Address Book</p>
                <p className="text-[#00000061]">My Payment Options</p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] pt-[32px]">
              <h2>My Orders</h2>
              <div className="pl-[20px]">
                <p className="text-[#00000061]">My Returns</p>
                <p className="text-[#00000061]">My Cancellations</p>
              </div>
            </div>
            <h2 className="pt-[32px]">My WishList</h2>
          </aside>

          <aside>
            <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-8 mt-10">
              <h2 className="text-2xl font-bold text-red-500 mb-6">Profile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">First name</label>
                  <input
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    type="text"
                    className="w-full border rounded px-4 py-2 mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Last name</label>
                  <input
                    type="text"
                    className="w-full border rounded px-4 py-2 mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Email address</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="w-full border rounded px-4 py-2 mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Phone Number</label>
                  <input
                    type="email"
                    className="w-full border rounded px-4 py-2 mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">Img</label>
                  <input
                  type="email"
                    className="w-full border rounded px-4 py-2 mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600">
                   Date Of Burthday
                  </label>
                  <input
                    type="text"
                    className="w-full border rounded px-4 py-2 mt-1"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-8 mb-2">
                Password Changes
              </h3>
              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Current password"
                  className="w-full border rounded px-4 py-2"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="password"
                    placeholder="New password"
                    className="w-full border rounded px-4 py-2"
                  />
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full border rounded px-4 py-2"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-8">
                <button className="text-gray-600 hover:underline">
                  Cancel
                </button>
                <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
                  Save Changes
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Account;
