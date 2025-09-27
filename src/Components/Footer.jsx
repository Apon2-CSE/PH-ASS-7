import React from "react";
import XImg from "../assets/fi_145807.png";
import GImg from "../assets/Group.png";
import gImg from "../assets/Group (1).png";
import fImg from "../assets/fi_6244710.png";
const Footer = () => {
  return (
    <>
      <div className=" bg-black">
        <div
          className="grid grid-cols-1 md:grid-cols-5 md:text-left text-center justify-around 
            container mx-auto  text-white p-10"
        >
          <div className="md:w-[300px]">
            <h1 className="text-[22px] font-bold  "> CS — Ticket System</h1>
            <p className=" mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="md:ml-12">
            <h1 className="text-[22px] font-bold   mt-2"> Company</h1>
            <h1 className="mt-2">About Us</h1>
            <h1 className="mt-2">Our Mission</h1>
            <h1 className="mt-2">Contact Saled</h1>
          </div>
          <div>
            <h1 className="text-[22px] font-bold  md:mt-0 mt-4 ">Services</h1>
            <h1 className="mt-2">Products & Services</h1>
            <h1 className="mt-2">Customer Stories</h1>
            <h1 className="mt-2">Download Apps</h1>
          </div>
          <div>
            <h1 className="text-[22px] font-bold   md:mt-0 mt-4">
              Information
            </h1>
            <h1 className="mt-2">Privacy Policy</h1>
            <h1 className="mt-2">Terms & Conditions</h1>
            <h1 className="mt-2">Join Us</h1>
          </div>
          <div className=" mx-auto">
            <h1 className="text-[22px] font-bold mb-1 md:mt-0 mt-4  ">
              Social Links
            </h1>
            <div className=" ">
              <div className="flex mb-2">
                <img src={GImg} alt="" className=" mb-2 mr-2" />
                <h1 className="  "> @CS — Ticket System</h1>{" "}
              </div>
              <div className="flex mb-2">
                <img src={XImg} alt="" className=" mb-2 mr-2" />
                <h1 className="  "> @CS — Ticket System</h1>{" "}
              </div>
              <div className="flex mb-2">
                <img src={gImg} alt="" className=" mb-2 mr-2" />
                <h1 className="  "> @CS — Ticket System</h1>{" "}
              </div>
              <div className="flex mb-2">
                <img src={fImg} alt="" className=" mb-2 mr-2" />
                <h1 className="  "> support@cst.com</h1>{" "}
              </div>
            </div>
          </div>
        </div>
        <p
          className="  max-w-[1600px]  mx-auto border-b-2 border-gray-400 
        m-4
        "
        ></p>
        <h2 className="text-white text-center md:pb-12 pb-6">
          © 2025 CS — Ticket System. All rights reserved.
        </h2>
      </div>
    </>
  );
};

export default Footer;
