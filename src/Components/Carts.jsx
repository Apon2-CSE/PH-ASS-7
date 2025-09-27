import React from "react";

const Carts = ({ manageData }) => {
  console.log(manageData);
  return (
    <div className="">
      <div className="rounded-xl bg-white p-5 shadow cursor-pointer ">
        <div className="flex justify-between">
          <h1 className="font-bold text-1xl">{manageData.title}</h1>
          <button
            className={`flex items-center space-x-2 px-4 py-1  font-semibold rounded-full shadow-md ${
              manageData.status == "Open"
                ? "bg-green-200 text-green-800"
                : "bg-yellow-200 text-yellow-600"
            }`}
          >
            <span
              className={`w-3 h-3 rounded-full mr-2 ${
                manageData.status == "Open" ? "bg-green-600" : "bg-yellow-600"
              }`}
            ></span>
            {manageData.status}
          </button>
        </div>
        <p className="text-gray-500 mt-2">{manageData.description}</p>

        <div className="flex justify-between mt-3">
          <div className="flex">
            <p>#{manageData.id}</p>
            <span
              className={`ml-5 ${
                manageData.priority == "HIGH PRIORITY"
                  ? "text-red-600"
                  : manageData.priority == "MEDIUM PRIORITY"
                  ? "text-yellow-500  "
                  : "text-green-600 "
              }`}
            >
              {manageData.priority}
            </span>
          </div>
          <div className="flex text-gray-500">
            <p>{manageData.customer}</p>
            <p className="ml-5">
              <i class="fa-solid fa-calendar-days"></i>
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
