import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../app/style/swiper.css";

import toast from "react-hot-toast";

import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import apple from "../../pages/home/images/1200px-Apple_gray_logo 1.png";
import headphone from "../../pages/home/images/hero_endframe__cvklg0xk3w6e_large 2.png";
import left from "../../pages/home/images/icons_arrow-left.png";
import right from "../../pages/home/images/icons arrow-right.png";
import stars from "../../pages/home/images/Five star.png";
import JBlBooom from "../../pages/home/images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
import service1 from "../../pages/home/images/Services.png";
import service2 from "../../pages/home/images/Services (1).png";
import service3 from "../../pages/home/images/Services (2).png";

import Button from "../../shared/components/button";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  get,
  get2,
  GetCart,
} from "../../entities/reducers/counterSlice";
import NewArrival from "../../shared/components/newArrival";
import TimeOut from "../../shared/components/timeOut";
import { NavLink } from "react-router";

let api = import.meta.env.VITE_API_URL;

const handleClose = () => {
  setAnchorEl(null);
};
function post() {
  toast.success("Added to Wishlist");
}
function erpost() {
  toast.error("Deleted from Wishlist");
}

const App = () => {
  const dispatch = useDispatch();
  let { data } = useSelector((store) => store.counter);
  let { data2 } = useSelector((store) => store.counter);
  let { wishlist } = useSelector((store) => store.counter);

  useEffect(() => {
    dispatch(get());
    dispatch(get2());
    dispatch(GetCart());
  }, []);

  return (
    <div>
      <section className="flex items-start max-w-[1200px] mx-auto justify-between pt-[40px] flex-col md:flex-row gap-[30px]">
        <input
          type="text"
          placeholder="Search"
          className="md:hidden bg-[#F5F5F5] p-[10px_5px] rounded-[5px] mx-auto w-[80%] "
        />
        <aside className="flex md:flex-col gap-[16px] flex-row flex-wrap">
        {data2.map((e) => (
            <div key={e.id}>            
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <h1>
                    <NavLink to="product">
                    {e.categoryName}
                    </NavLink>
                    </h1>
                </div>
            </div>
          ))}
        </aside>
        <aside className="w-[100%] md:h-[344px] mx-auto md:w-[80%] h-[633px]">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <div className="flex bg-[black] text-[white] w-[100%] justify-around md:items-center flex-col md:flex-row items-start h-[100%]">
                <div className="flex flex-col gpa-[20px] md:w-[30%] w-[70%] mx-auto">
                  <div className="flex items-center gap-[20px]">
                    <img src={apple} alt="" />
                    <p>iPhone 14 Series</p>
                  </div>
                  <h1 className="md:text-[48px] text-[40px]">
                    Up to 10% off Voucher
                  </h1>
                  <p>Shop Now -</p>
                </div>
                <img
                  src={headphone}
                  alt=""
                  className="w-[328px] md:w-[496px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex bg-[black] text-[white] w-[100%] justify-around md:items-center flex-col md:flex-row items-start h-[100%]">
                <div className="flex flex-col gpa-[20px] md:w-[30%] w-[70%] mx-auto">
                  <div className="flex items-center gap-[20px]">
                    <img src={apple} alt="" />
                    <p>iPhone 14 Series</p>
                  </div>
                  <h1 className="md:text-[48px] text-[40px]">
                    Up to 10% off Voucher
                  </h1>
                  <p>Shop Now -</p>
                </div>
                <img
                  src={headphone}
                  alt=""
                  className="w-[328px] md:w-[496px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex bg-[black] text-[white] w-[100%] justify-around md:items-center flex-col md:flex-row items-start h-[100%]">
                <div className="flex flex-col gpa-[20px] md:w-[30%] w-[70%] mx-auto">
                  <div className="flex items-center gap-[20px]">
                    <img src={apple} alt="" />
                    <p>iPhone 14 Series</p>
                  </div>
                  <h1 className="md:text-[48px] text-[40px]">
                    Up to 10% off Voucher
                  </h1>
                  <p>Shop Now -</p>
                </div>
                <img
                  src={headphone}
                  alt=""
                  className="w-[328px] md:w-[496px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex bg-[black] text-[white] w-[100%] justify-around md:items-center flex-col md:flex-row items-start h-[100%]">
                <div className="flex flex-col gpa-[20px] md:w-[30%] w-[70%] mx-auto">
                  <div className="flex items-center gap-[20px]">
                    <img src={apple} alt="" />
                    <p>iPhone 14 Series</p>
                  </div>
                  <h1 className="md:text-[48px] text-[40px]">
                    Up to 10% off Voucher
                  </h1>
                  <p>Shop Now -</p>
                </div>
                <img
                  src={headphone}
                  alt=""
                  className="w-[328px] md:w-[496px]"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex bg-[black] text-[white] w-[100%] justify-around md:items-center flex-col md:flex-row items-start h-[100%]">
                <div className="flex flex-col gpa-[20px] md:w-[30%] w-[70%] mx-auto">
                  <div className="flex items-center gap-[20px]">
                    <img src={apple} alt="" />
                    <p>iPhone 14 Series</p>
                  </div>
                  <h1 className="md:text-[48px] text-[40px]">
                    Up to 10% off Voucher
                  </h1>
                  <p>Shop Now -</p>
                </div>
                <img
                  src={headphone}
                  alt=""
                  className="w-[328px] md:w-[496px]"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </aside>
      </section>
      <section className="max-w-[1200px] mx-auto pt-[70px]">
        <div className="flex items-center gap-[16px]">
          <p className="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></p>
          <p className="text-[#DB4444]">Today’s</p>
        </div>
        <div className="flex md:items-center justify-between pt-[24px] flex-col md:flex-row items-start">
          <div className="flex items-center gap-[87px] flex-col md:flex-row">
            <p className="text-[36px]">Flash Sales</p>
            <div>
              <TimeOut />
            </div>
          </div>
          <div className=" items-center gap-[8px] hidden md:flex">
            <img
              src={left}
              alt=""
              className="rounded-[50%] bg-[#F5F5F5] p-[15px]"
            />
            <img
              src={right}
              alt=""
              className="rounded-[50%] bg-[#F5F5F5] p-[15px]"
            />
          </div>
        </div>
      </section>
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
                        }
                        else{
                          post()
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
      <section className="max-w-[1200px] mx-auto pt-[70px]">
        <div className="flex items-center gap-[16px]">
          <p className="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></p>
          <p className="text-[#DB4444]">Categories</p>
        </div>
        <div className="flex md:items-center justify-between pt-[24px] flex-col md:flex-row items-start">
          <div className="flex items-center gap-[87px] flex-col md:flex-row">
            <p className="text-[36px]">Browse By Category</p>
          </div>
          <div className=" items-center gap-[8px] hidden md:flex">
            <img
              src={left}
              alt=""
              className="rounded-[50%] bg-[#F5F5F5] p-[15px]"
            />
            <img
              src={right}
              alt=""
              className="rounded-[50%] bg-[#F5F5F5] p-[15px]"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center max-w-[1200px] mx-auto pt-[32px] border-b-[1px] border-b-[#d6d4d4]  pb-[60px]">
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
          {data2.map((e) => (
            <SwiperSlide key={e.id}>
              <div className="border-[1px] flex flex-col items-center p-[10px] gap-[10px] rounded-[10px] h-[165px] hover:shadow-lg w-[190px] mx-auto">
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={
                    e.categoryImage
                      ? `${api}/images/${e.categoryImage}`
                      : "placeholder.jpg"
                  }
                  alt={e.categoryName}
                />
                <div className="flex flex-col gap-[8px] items-center w-full">
                  <h1>{e.categoryName}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="max-w-[1200px] mx-auto pt-[70px]">
        <div className="flex items-center gap-[16px]">
          <p className="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></p>
          <p className="text-[#DB4444]">This Month</p>
        </div>
        <div className="flex md:items-center justify-between pt-[24px] flex-col md:flex-row items-start">
          <div className="flex items-center gap-[87px] flex-col md:flex-row">
            <p className="text-[36px]">Best Selling Products</p>
          </div>
          <div className="pt-[40px]">
            <Button text="View All Products" />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center max-w-[1200px] mx-auto pt-[32px] border-b-[1px] border-b-[#d6d4d4]  pb-[60px]">
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
                        }
                        else{
                          post()
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
                  <h1>{e.productName}</h1>
                  <div className="flex gap-[20px]">
                    <p className="text-[#DB4444]">${e.price}</p>
                    <p className="line-through text-[#9c9a9a]">
                      ${e.discountPrice}
                    </p>
                  </div>
                  <img src={stars} alt="stars" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="bg-[black] text-[white] max-w-[1200px] mx-auto flex flex-col items-center md:flex-row p-[20px_20px] gap-[20px]">
        <aside className="max-w-[1200px] mx-auto pt-[70px] md:w-[40%] flex flex-col gap-[30px] items-start">
          <p className="text-[#00FF66]">Categories</p>
          <p className="text-[36px] md:text-[48px]">
            Enhance Your Music Experience
          </p>
          <div>
            <TimeOut />
          </div>
          <button className="bg-[#00FF66] p-[10px_30px] rounded-[4px] text-[black]">
            Buy Now!
          </button>
        </aside>
        <aside className="md:w-[45%]">
          <img src={JBlBooom} className="w-[100%] h-[330px]" alt="" />
        </aside>
      </section>
      <section className="max-w-[1200px] mx-auto pt-[70px]">
        <div className="flex items-center gap-[16px]">
          <p className="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></p>
          <p className="text-[#DB4444]">Our Products</p>
        </div>
        <div className="flex md:items-center justify-between pt-[24px] flex-col md:flex-row items-start">
          <div className="flex items-center gap-[87px] flex-col md:flex-row">
            <p className="text-[36px]">Explore Our Products</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center max-w-[1200px] mx-auto pt-[32px] border-b-[1px] border-b-[#d6d4d4]  pb-[60px]">
        <div className=" flex md:flex-wrap gap-[20px] md:flex-row flex-col">
          {data.map((e) => (
            <div
              key={e.id}
              className="bg-[#F5F5F5] flex flex-col items-center p-[10px] gap-[10px] rounded-[10px] h-[350px] hover:shadow-lg w-[270px] mx-auto"
            >
              <div className="flex justify-between w-full">
                <div className="flex gap-[8px] flex-col">
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
                        }
                        else{
                          post()
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
        <div className="pt-[40px]">
          <Button text="View All Products" />
        </div>
      </section>
      <NewArrival />
      <section className="max-w-[1200px] mx-auto flex  pt-[120px] flex-col md:flex-row gap-[48px] md:gap-[88px] justify-center">
        <div className="flex flex-col gap-[16px] items-center">
          <img src={service1} alt="" />
          <h2 className="font-bold">FREE AND FAST DELIVERY</h2>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col gap-[16px] items-center">
          <img src={service2} alt="" />
          <h2 className="font-bold">24/7 CUSTOMER SERVICE</h2>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col gap-[16px] items-center">
          <img src={service3} alt="" />
          <h2 className="font-bold">MONEY BACK GUARANTEE</h2>
          <p>We reurn money within 30 days</p>
        </div>
      </section>
    </div>
  );
};

export default App;
