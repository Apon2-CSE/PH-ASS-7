import React from "react";
import BGImage from "../../assets/bg-1.png";
import BGImage2 from "../../assets/bg-2.png";

const HeaderSection = ({ inProgress, resolved }) => {
  return (
    <div className="flex flex-col md:flex md:flex-row md:justify-center md:items-center  gap-6 text-white py-20 max-w-11/12 mx-auto">
      <div
        className="border rounded-xl  py-16   w-full md:w-1/2  flex flex-col justify-center items-center gap-4 relative"
        style={{
          backgroundImage: `linear-gradient(to right, #632EE3, #9F62F2) `,
        }}
      >
        <p className="text-2xl">In-Progress</p>
        <p className="font text-7xl">{inProgress.length}</p>
        <img src={BGImage} alt="" className=" absolute top-0 left-0" />
        <img src={BGImage2} alt="" className=" absolute top-0 right-0" />
      </div>
      <div
        className="border rounded-xl py-16   w-auto md:w-1/2 flex flex-col justify-center items-center gap-4 relative"
        style={{
          backgroundImage: `linear-gradient(to right, #54CF68, #00827A)`,
        }}
      >
        <p className="text-2xl">Resolved</p>
        <p className="font text-7xl">{resolved.length}</p>
        <img src={BGImage} alt="" className=" absolute top-0 left-0" />
        <img src={BGImage2} alt="" className=" absolute top-0 right-0" />
      </div>
    </div>
  );
};

export default HeaderSection;
