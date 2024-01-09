import React from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { HiSpeakerphone } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="container mx-auto flex items-center justify-between py-2 px-8">
      <div className="flex items-center gap-2">
        <p className="font-semibold mr-2">Payments</p>
        <CiCircleQuestion />
        <p className="text-sm">How it works</p>
      </div>
      <div class="search-container gap-2">
        <CiSearch color="gray" size={24} />
        <input type="search" placeholder="Search features, tutorials, etc." />
      </div>
      <div className="flex items-center gap-3">
        <div className="rounded-background flex items-center justify-center">
          <HiSpeakerphone size={24} color="#4c4c4c"/>
        </div>
        <div className="rounded-background flex items-center justify-center">
          <FaCaretDown size={24} color="#4c4c4c"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
