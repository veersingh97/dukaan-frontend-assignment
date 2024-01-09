import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Tiles = () => {
  return (
    <div className="container mx-auto py-2 px-8">
      <div className="flex items-center justify-between mt-5">
        <h2 className="font-semibold text-2xl">Overview</h2>
        <div className="flex items-center justify-between border gap-2 py-2 px-4 bg-white rounded-md">
          <p>Last Month </p>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="bg-white p-5 rounded-lg">
          <p className="mb-4">Online orders</p>
          <p className="font-semibold text-4xl">231</p>
        </div>
        <div className="bg-white p-5 rounded-lg">
          <p className="mb-4">Amount received</p>
          <p className="font-semibold text-4xl">₹23,92,312.19</p>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
