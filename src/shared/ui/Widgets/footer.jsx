import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <div>
      <footer className="bg-[black] text-[white] mt-[150px]">
        <div className="max-w-[1200px] mx-auto flex justify-between py-[60px] flex-col md:flex-row pl-[20px] md:pl-[0px] gap-[20px]">
          <div className="flex flex-col items-start gap-[24px]">
            <h2 className="text-[24px]">Exclusive</h2>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="border-[1px] rounded-[3px] p-[5px]"
            />
          </div>
          <div className="flex flex-col items-start gap-[24px]">
            <h2 className="text-[24px]">Support</h2>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="flex flex-col items-start gap-[24px]">
            <h2 className="text-[24px]">Account</h2>
            <p>My Account</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
          <div className="flex flex-col items-start gap-[24px]">
            <h2 className="text-[24px]">Quick Link</h2>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col items-start gap-[24px]">
            <h2 className="text-[24px]">Social </h2>
            <div className="flex gap-[24px] items-center">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
        <div className="text-center pb-[30px] text-[#ffffff60]">
          Copyright Rahimjon 2025. All right reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
