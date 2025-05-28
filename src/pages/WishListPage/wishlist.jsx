import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import api from "../../shared/ConfigJs/api"

import "./get.css";
import Button from "../../shared/ui/Kit/button";
import {addToWishlist} from "../../entities/counterSlice";

import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import stars from "@images/Five star.png";
import { getProducts } from "../../entities/Product/productSlice";
import { addToCart } from "../../entities/Cart/cartSlice";

const Wishlist = () => {
  let { getData } = useSelector((store) => store.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const dispatch = useDispatch();
  let { wishlist } = useSelector((store) => store.counter);
// console.log(wishlist);

  return (
    <div>
<section className="flex flex-col items-center max-w-[1200px] mx-auto pt-[32px] border-b-[1px] border-b-[#d6d4d4]  pb-[60px]">
        <div className=" flex md:flex-wrap gap-[20px] md:flex-row flex-col">
          {wishlist.map((e) => (
            <div
              key={e.id}
              className="bg-[#F5F5F5] flex flex-col items-center p-[10px] gap-[10px] rounded-[10px] h-[350px] hover:shadow-lg w-[270px] mx-auto"
            >
              <div className="flex justify-between w-full">
                <div className="flex gap-[8px] flex-col">
                  <button onClick={()=>dispatch(addToWishlist(e))}>
                    <NavLink>
                     <DeleteOutlineIcon className="bg-white rounded-full p-[3px]"  />
                    </NavLink>
                  </button>{" "}
                </div>
              </div>
              <img
                style={{ width: "150px", height: "170px" }}
                src={e.image ? `${api}/images/${e.image}` : "placeholder.jpg"}
                alt={e.productName}
              />
              <div className="flex flex-col gap-[8px] items-start w-full">
                <h1>{e.productName}</h1>
                <div className="flex gap-[20px] items-center">
                  <p className="text-[#DB4444]">${e.price}</p>

                  <img src={stars} alt="stars" />
                </div>
                <button
                  onClick={() => dispatch(addToCart(e.id))}
                  className="bg-black text-white w-[100%] cursor-pointer"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      <div className="flex items-center gap-[16px] max-w-[1200px]  mx-auto  mt-[100px]">
        <p className="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></p>
        <p>Just For You</p>
      </div>
      <section className="flex flex-col items-center max-w-[1200px] mx-auto pt-[32px] border-b-[1px] border-b-[#d6d4d4]  pb-[60px] ">
        <Swiper
          loop={true}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="mySwiper w-full"
        >
          {getData.map((e) => (
            <SwiperSlide key={e.id}>
              <div className="bg-[#F5F5F5] flex flex-col items-center p-[10px] gap-[10px] rounded-[10px] h-[350px] hover:shadow-lg w-[270px] mx-auto">
                <div className="flex justify-between w-full">
                  <p className="bg-[#DB4444] text-white text-[12px] p-[2px_5px] rounded-2xl">
                    -40%
                  </p>
                  <div className="flex gap-[8px]">
                    <button>
                      <NavLink to={`/getId/${e.id}`}>
                        <VisibilityIcon className="bg-white rounded-full p-[3px]" />
                      </NavLink>
                    </button>{" "}
                  </div>
                </div>
                <img
                  style={{ width: "150px", height: "170px" }}
                  src={e.image ? `${api}/images/${e.image}` : "placeholder.jpg"}
                  alt={e.productName}
                />
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <h1 className="text-[16px] font-bold">{e.productName}</h1>
                  <div className="flex gap-[20px]">
                    <p className="text-[#DB4444]">${e.price}</p>
                    <p className="line-through text-[#9c9a9a]">
                      ${e.discountPrice}
                    </p>
                    <p>{e.id}</p>
                  </div>
                  <img src={stars} alt="stars" />
                  <button
                    onClick={() => dispatch(addToCart(e.id))}
                    className="bg-black text-white w-[100%] cursor-pointer"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
          <div className="pt-[40px]">
            <Button text="View All Products" />
          </div>
      </section>
    </div>
  );
};

export default Wishlist;
