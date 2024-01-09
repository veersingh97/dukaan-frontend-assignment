import React from "react";
import { routes } from "../constant/sidebarRoutes";
import Logo from "../assests/images.png";
import { IoIosArrowDown } from "react-icons/io";
import { CiWallet } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between px-2 py-4 bg-[#1e2640] text-white">
      <div>
        <div className="flex items-center mb-9 justify-between">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="" className="w-1/4 rounded-md h-[40px]"></img>
            <div>
              <h2 className="font-bold">Nishyam</h2>
              <p className="font-thin underline">Visit store</p>
            </div>
          </div>
          <div className="flex items-center">
            <IoIosArrowDown size={25} />
          </div>
        </div>
        {routes.map((route) => {
          return (
            <div key={route.id} className="mt-2">
              <ul className={route.active ? "bg-[#343c53] rounded-sm" : ""}>
                <li className="mx-3">
                  <span className="flex items-center gap-4 p-1">
                    {route.icon}
                    {route.name}
                  </span>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="flex items-center mx-2 gap-2 bg-[#353c53] rounded-sm p-1">
        <div className="bg-[#494f64] rounded-sm p-1">
          <CiWallet size={28} color="white" fontWeight={600} />
        </div>
        <div>
          <p>Available credits</p>
          <p className="font-medium">222.10</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
