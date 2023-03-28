import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";
import Circlebar from "../components/CircleBar";
import Menu from "../components/Menu";
import Table from "../components/Table";
import VerticalBar from "../components/VerticalBar";
import userData from "../datas/users.data";

const Main = () => {
  const [authenticated, setauthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser === "true") {
      setauthenticated(true);
    }
  }, []);

  const handleQuit = () => {
    localStorage.setItem("authenticated", false);
    navigate("/");
  };
  const useData = userData.slice(0, 3);
  if (authenticated === "false") {
    return <Navigate replace to="/login" />;
  } else
    return (
      <div className="flex bg-[#F2F2F2] w-fit h-full pb-10">
        <div className="fixed w-full z-50 h-[75px] bg-white right-0 top-0 text-black ">
          <div className="h-full w-full flex justify-between items-center px-10">
            <div className="ml-[96px] flex">
              <BsSearch />
              <p className=" opacity-40 mix-blend-normal ml-2 -mt-1">Search</p>
              <div
                className="ml-24 opacity-30 cursor-pointer"
                onClick={handleQuit}
              >
                quit
              </div>
            </div>
            <div className=" float-right flex gap-1">
              {useData.map((item, index) => (
                <div
                  className={` ${
                    index === 0 &&
                    "before:content-[' '] before:w-[12px] before:h-[12px] before:bg-action-success before:absolute relative before:bottom-0 before:right-0  before:rounded-full"
                  } w-[44px] h-[44px] cursor-pointer `}
                >
                  <img
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(
                      item.image
                    )}`}
                    alt="usericon"
                    className="w-full h-full "
                  />
                </div>
              ))}
              <div className="w-[44px] h-[44px] bg-action-primary rounded-full text-white text-4xl text-center font-extralight cursor-pointer">
                +
              </div>
            </div>
          </div>
        </div>
        <Menu />
        <div className="flex flex-col w-full h-full mt-24 px-10 ml-[96px] gap-6  ">
          <div className=" h-[360px] bg-white mb-2 mt-30 ml-30 rounded-t-[10px]">
            <div className="mt-7 ml-4">Title</div>
            <Table userData={useData} />
          </div>
          <div className="flex flex-col md:flex-row w-full gap-8">
            <VerticalBar />
            <Circlebar />
          </div>
        </div>
      </div>
    );
};

export default Main;
