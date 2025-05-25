import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router";
import { addToWishlist, getByid } from "../../entities/reducers/counterSlice";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import toast from "react-hot-toast";

let api = import.meta.env.VITE_API_URL;

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReplayIcon from "@mui/icons-material/Replay";
import "./get.css";
import Button from "../../shared/components/button";
import { addToCart, get } from "../../entities/reducers/counterSlice";

import VisibilityIcon from "@mui/icons-material/Visibility";

import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import stars from "../../pages/home/images/Five star.png";

function post() {
  toast.success("Added to Wishlist");
}
function erpost() {
  toast.error("Deleted from Wishlist");
}

const GetId = () => {
  let { wishlist } = useSelector((store) => store.counter);

  let { data } = useSelector((store) => store.counter);

  useEffect(() => {
    dispatch(get());
  }, []);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const dispatch = useDispatch();
  let { info } = useSelector((store) => store.counter);

  let { id } = useParams();
  useEffect(() => {
    dispatch(getByid(id));
  }, [id]);

  return (
    <div>
      <section className="max-w-[1200px] mx-auto">
        <div className="pt-[60px] pb-[40px]">
          Account / {info.brand} / {info?.productName}
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between">
        <aside className="w-[58%] mx-auto">
          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mywiper2 mb-4"
          >
            {info.images?.map((el, i) => (
              <SwiperSlide key={i}>
                <img
                  src={`${api}/images/${el.images}`}
                  alt=""
                  className="w-full h-[400px] object-contain rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mywiper"
          >
            {info.images?.map((el, i) => (
              <SwiperSlide key={i}>
                <img
                  src={`${api}/images/${el.images}`}
                  alt=""
                  className="h-[80px] object-cover rounded-lg cursor-pointer"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </aside>

        <aside className="w-[38%] flex flex-col gap-[25px]">
          <h1 className="text-[24px] ">{info?.productName}</h1>
          <div className="flex items-center justify-between">
            <img src={stars} alt="" />
            <p className="text-[#00000034]">(150 Reviews)</p>
            <p className="text-[red]">
              {info.quantity > 0 ? "InStock" : "OutStock"}
            </p>
          </div>
          <p className="text-[24px] font-bold ">$ {info?.price}</p>
          <p className=" border-b-[1px] pb-[10px] text-[#0000006d] border-b-[#0000006d]">
            {info?.description}
          </p>
          <div className="flex items-center gap-[20px]">
            <p>Colours:</p>
            <p
              style={{ backgroundColor: info.color }}
              className="w-[15px] h-[15px] rounded-[50%]"
            ></p>
          </div>
          <div className="flex items-center gap-[20px]">
            <p>Size:</p>
            <div className="flex gap-[12px] items-center">
              <p className="rounded-[4px] p-[6px_11px] border-[1px] hover:bg-[#DB4444] hover:text-[white]">
                XS
              </p>
              <p className="rounded-[4px] p-[6px_11px] border-[1px] hover:bg-[#DB4444] hover:text-[white]">
                S
              </p>
              <p className="rounded-[4px] p-[6px_11px] border-[1px] hover:bg-[#DB4444] hover:text-[white]">
                M
              </p>
              <p className="rounded-[4px] p-[6px_11px] border-[1px] hover:bg-[#DB4444] hover:text-[white]">
                L
              </p>
              <p className="rounded-[4px] p-[6px_11px] border-[1px] hover:bg-[#DB4444] hover:text-[white]">
                XL
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[18px]">
            <div className="flex items-center">
              <p className="rounded-[4px] p-[8px_11px] border-[1px] hover:bg-[#DB4444] hover:text-[white]">
                -
              </p>
              <p className="rounded-[4px] p-[8px_32px] border-[1px]">2</p>
              <p className="rounded-[4px] p-[8px_11px] border-[1px] hover:bg-[#DB4444] hover:text-[white]">
                +
              </p>
            </div>
            <button className="bg-[#DB4444] p-[10px_48px] rounded-[4px] text-[white]">
              Buye Now
            </button>
            <div className="border-[1px] rounded-[4px] w-[40px] h-[40px] p-[8px]">
              <FavoriteBorderIcon />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-[22px] border-[1px] p-[20px]">
              <LocalShippingIcon />
              <div>
                <p className="text-[22px]">Free Delivery</p>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex items-center gap-[22px] border-[1px] p-[20px]">
              <ReplayIcon />
              <div>
                <p className="text-[22px]">Return Delivery</p>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </aside>
      </section>
      <div className="flex items-center gap-[16px] max-w-[1200px]  mx-auto  mt-[100px]">
        <p className="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></p>
        <p className="text-[#DB4444]">Related Item</p>
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
          {data.map((e) => (
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
                    <button
                      onClick={() => {
                        const alreadyInWishlist = wishlist.find(
                          (el) => el.id === e.id
                        );

                        dispatch(addToWishlist(e));

                        if (alreadyInWishlist) {
                          erpost();
                        } else {
                          post();
                        }
                      }}
                    >
                      <FavoriteBorderIcon
                        className="bg-white rounded-full p-[3px] cursor-pointer"
                        style={{
                          backgroundColor: wishlist.find((el) => el.id == e.id)
                            ? "#DB4444"
                            : "white",
                          color: wishlist.find((el) => el.id == e.id)
                            ? "white"
                            : "blue",
                        }}
                      />
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
                    className="bg-black text-white w-[100%]"
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

export default GetId;
