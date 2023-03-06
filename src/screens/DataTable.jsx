import React from "react";
import Menu from "../components/Menu";
import Table from "../components/Table";
import userData from "../datas/users.data";

const DataTable = () => {
  const useData = userData.slice(0, 8);
  return (
    <div className="flex bg-[#F2F2F2] w-full min-w-fit h-full min-h-screen pb-10 font-grotesk">
      <div className="fixed w-full z-40 h-[75px] bg-white right-0 top-0 text-black ">
        <p className=" ml-[96px] pl-10 mt-[23px] font-bold">Members</p>
      </div>
      <Menu />
      <div className="w-full mt-36 px-10 ml-[96px] gap-6 ">
        <div className="flex gap-2 float-right -mt-12 ">
          <button className="w-[100px] h-[44px] rounded-[10px] bg-opacity-10 border-opacity-10 border border-solid border-1 border-[#000000] font-semibold bg-white">
            Reject
          </button>
          <button className="w-[100px] h-[44px] rounded-[10px] font-semibold text-white bg-action-info">
            Approve
          </button>
        </div>
        <div className="w-full bg-white mb-2 mt-30 ml-30">
          <Table rowTick="true" userData={useData} />
        </div>
      </div>
    </div>
  );
};

export default DataTable;
