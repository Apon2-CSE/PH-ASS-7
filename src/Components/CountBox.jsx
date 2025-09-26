import React from "react";
import Container from "./Container";
import BGImage from "../assets/vector1.png";
import BGImage2 from "../assets/vector1.png";

const CountBox = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="bg-[#F5F5F5]">
      <Container>
        <div className="flex flex-col md:flex md:flex-row md:justify-center md:items-center  gap-6 text-white py-20 max-w-11/12 mx-auto">
          <div
            className="border rounded-xl  py-16   w-full md:w-1/2  flex flex-col justify-center items-center gap-4 relative"
            style={{
              backgroundImage: `linear-gradient(to right, #632EE3, #9F62F2) `,
            }}
          >
            <p className="text-2xl">In-Progress</p>
            <p className="font text-7xl">{inProgressCount.length}</p>
            <img src={BGImage} alt="" className=" absolute top-0 left-0" />
            <img
              src={BGImage2}
              alt=""
              className="rotate-180 absolute  scale-y-[-1]  top-0 right-0"
            />
          </div>
          <div
            className="border rounded-xl py-16   w-auto md:w-1/2 flex flex-col justify-center items-center gap-4 relative"
            style={{
              backgroundImage: `linear-gradient(to right, #54CF68, #00827A)`,
            }}
          >
            <p className="text-2xl">Resolved</p>
            <p className="font text-7xl">{resolvedCount.length}</p>
            <img src={BGImage} alt="" className=" absolute top-0 left-0" />
            <img
              src={BGImage2}
              alt=""
              className=" rotate-180 absolute  scale-y-[-1] top-0 right-0"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CountBox;

{
  /* <div className="grid md:grid-cols-2 gap-5 p-10 text-center">
  <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-[200px] p-7 text-white rounded-2xl font-bold text-2xl flex flex-col justify-center items-center">
    <h2>In-Progress</h2>
    <span>{inProgressCount}</span>
  </div>
  <div className="bg-gradient-to-r from-[#54CF68] to-[#00827A] h-[200px] p-7 text-white rounded-2xl font-bold text-2xl flex flex-col justify-center items-center">
    <h2>Resolved</h2>
    <span>{resolvedCount}</span>
  </div>
</div>; */
}
