import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const Contact = () => {
  return (
    <div>
      <section className="max-w-[1200px] mx-auto w-[90%] md:w-full">
        <div className="pt-[60px] pb-[40px]">Home / Contact</div>
        <div className="flex flex-col md:flex-row justify-between  w-[90%] mx-auto md:w-[100%] ">
          <aside className="">
            <div className="flex flex-col gap-[24px] border-b-[1px] border-b-[#8080806b] pb-[32px]">
              <div className="flex items-center gap-[16px]">
                <LocalPhoneIcon className="bg-[#DB4444] rounded-[50%] text-[white] p-[3px]" />
                <h2>Call To Us</h2>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <div className="flex flex-col gap-[24px] pt-[32px]">
              <div className="flex items-center gap-[16px]">
                <EmailIcon className="bg-[#DB4444] rounded-[50%] text-[white] p-[3px]" />
                <h2>Write To US</h2>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </aside>
          <aside>
              <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md ">
                <form className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border rounded px-4 py-2 w-full"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="border rounded px-4 py-2 w-full"
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      className="border rounded px-4 py-2 w-full"
                    />
                  </div>

                  <textarea
                    placeholder="Your Message"
                    className="border rounded px-4 py-2 w-full h-40 resize-none"
                  ></textarea>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Contact;
