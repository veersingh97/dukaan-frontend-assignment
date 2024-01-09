import React from "react";
import { CiSearch } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";
import { LuDownload } from "react-icons/lu";
import { CiCircleInfo } from "react-icons/ci";
import { tableData } from "../constant/tableData";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidDownArrow } from "react-icons/bi";

const Table = () => {
  return (
    <div className="container mx-auto pt-2 pb-9 px-8 mt-5">
      <h2 className="font-semibold text-2xl">Transactions | This Month</h2>
      <div className="py-2 px-4 bg-white p-5 rounded-lg mt-5">
        <div className="flex items-center justify-between ">
          <div class="table-search-container gap-2">
            <CiSearch color="gray" size={20} />
            <input type="search" placeholder="Search by order ID..." />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-between border-2 gap-2 py-2 px-4 bg-white rounded-md">
              <p className="font-medium secondary-color">Sort</p>
              <BiSortAlt2 color="#4c4c4c" />
            </div>
            <div className="border-2 py-3 px-4 bg-white rounded-md">
              <LuDownload color="#4c4c4c" />
            </div>
          </div>
        </div>
        <table className="w-full mt-4">
          <tr className="secondary-color bg-[#f2f2f2] p-2 rounded-md">
            <th className="text-left">Order ID</th>
            <th className="text-left flex items-center gap-1">
              Order date
              <BiSolidDownArrow size={10} />
            </th>
            <th className="text-right">Order amount</th>
            <th className="flex items-center gap-1 justify-end">
              Transaction fees
              <CiCircleInfo />
            </th>
          </tr>
          {tableData.map((data) => {
            return (
              <tr
                className="border-b p-2 font-medium text-[#1a181e]"
                key={data.id}
              >
                <td className="text-[#146eb4]">{data.orderId}</td>
                <td>{data.orderDate}</td>
                <td className="text-right">{data.orderAmount}</td>
                <td className="flex items-center gap-1 justify-end">
                  {data.fees}
                </td>
              </tr>
            );
          })}
        </table>
        <div className="flex items-center justify-center mt-5 gap-6 pb-5 secondary-color ">
          <p className="gap-2 secondary-color flex items-center border-2 py-1 font-medium px-5 rounded-md">
            <IoIosArrowBack />
            Previous
          </p>
          <p>1</p>
          <p>...</p>
          <p className="py-1 px-2 bg-[#146eb4] rounded text-white">10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p className="gap-2 flex items-center border-2 py-1 font-medium px-5 rounded-md">
            Next
            <IoIosArrowForward />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Table;
