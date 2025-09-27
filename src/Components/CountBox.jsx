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
            <h2>In-Progress</h2>
            <span>{inProgressCount}</span>
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
            {" "}
            <h2>Resolved</h2>
            <span>{resolvedCount}</span>
            <img src={BGImage} alt="" className=" absolute top-0 left-0" />
            <img
              src={BGImage2}
              alt=""
              className=" rotate-180 absolute  scale-y-[-1] top-0 right-0"
            />
          </div>
          ;
        </div>
      </Container>
    </div>
  );
};

export default CountBox;

{
}
