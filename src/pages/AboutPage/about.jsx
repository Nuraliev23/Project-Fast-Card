import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import women from '@images/Side Image.png';
import service1 from '@images/Services (4).png';
import service2 from '@images/Services (3).png';
import worker1 from '@images/Frame 874.png';
import worker2 from '@images/Frame 875.png';
import worker3 from '@images/Frame 876.png';
import service4 from '@images/Services.png';
import service5 from '@images/Services (1).png';
import service6 from '@images/Services (2).png';

const About = () => {
  return (
    <div>
      <section className="max-w-[1200px] mx-auto">
        <div className="pt-[60px] pb-[40px]">Home / About</div>
        <div className="flex items-center flex-col md:flex-row gap-[30px]">
          <aside className="flex flex-col gap-[40px] items-start ">
            <h1 className="text-[54px]">Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </aside>
          <img src={women} alt="" />
        </div>
      </section>
      <section className="flex flex-col md:flex-row max-w-[1200px] mx-auto justify-between mt-[100px] gap-[15px] w-[90%]">
        <div className="border-[1px] flex flex-col gap-[12px] items-center p-[30px] hover:bg-[#DB4444] hover:text-[white]">
          <img src={service1} alt="" />
          <h2 className="text-[32px] font-bold">10.5k </h2>
          <p>Sallers active our site</p>
        </div>
        <div className="border-[1px] flex flex-col gap-[12px] items-center p-[30px] hover:bg-[#DB4444] hover:text-[white]">
          <img src={service2} alt="" />
          <h2 className="text-[32px] font-bold">33k</h2>
          <p>Mopnthly Produduct Sale</p>
        </div>
        <div className="border-[1px] flex flex-col gap-[12px] items-center p-[30px] hover:bg-[#DB4444] hover:text-[white]">
          <img src={service1} alt="" />
          <h2 className="text-[32px] font-bold">45.5k</h2>
          <p>Customer active in our site</p>
        </div>
        <div className="border-[1px] flex flex-col gap-[12px] items-center p-[30px] hover:bg-[#DB4444] hover:text-[white]">
          <img src={service2} alt="" />
          <h2 className="text-[32px] font-bold">25k</h2>
          <p>Anual gross sale in our site</p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto flex flex-col md:flex-row pt-[140px]">
        <div className="flex flex-col gap-[12px] items-start p-[30px]">
          <img src={worker1} alt="" />
          <h2>Tom Cruise</h2>
          <p>Founder & Chairman</p>
          <div className="flex gap-[16px] items-center">
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        <div className="flex flex-col gap-[12px] items-start p-[30px]">
          <img src={worker2} alt="" />
          <h2>Emma Watson</h2>
          <p>Managing Director</p>
          <div className="flex gap-[16px] items-center">
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        <div className="flex flex-col gap-[12px] items-start p-[30px]">
          <img src={worker3} alt="" />
          <h2>Will Smith</h2>
          <p>Product Designer</p>
          <div className="flex gap-[16px] items-center">
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto flex  pt-[120px] flex-col md:flex-row gap-[48px] md:gap-[88px] justify-center">
            <div className="flex flex-col gap-[16px] items-center">
              <img src={service4} alt="" />
              <h2 className="font-bold">FREE AND FAST DELIVERY</h2>
              <p>Free delivery for all orders over $140</p>
            </div>
            <div className="flex flex-col gap-[16px] items-center">
              <img src={service5} alt="" />
              <h2 className="font-bold">24/7 CUSTOMER SERVICE</h2>
              <p>Friendly 24/7 customer support</p>
            </div>
            <div className="flex flex-col gap-[16px] items-center">
              <img src={service6} alt="" />
              <h2 className="font-bold">MONEY BACK GUARANTEE</h2>
              <p>We reurn money within 30 days</p>
            </div>
          </section>
    </div>
  );
};

export default About;
