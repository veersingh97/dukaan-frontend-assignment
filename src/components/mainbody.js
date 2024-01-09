import React from "react";
import Header from "./header";
import Tiles from "./tiles";
import Table from "./table";

const Mainbody = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#fafafa]">
        <Tiles />
        <Table />
      </div>
    </div>
  );
};

export default Mainbody;
