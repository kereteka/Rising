import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menusvg from "../datas/menusvg.data";
import logo from "../logo.svg";

const Menu = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/datatable") {
      setActiveIcon(1);
    }
    if (pathname === "/main") {
      setActiveIcon(0);
    }
  }, [pathname]);

  const handleIconClick = (index) => {
    setActiveIcon(index);
  };
  return (
    <div className="min-w-[96px] fixed w-[96px] h-[100%] z-[100] py-4 rounded-r-[20px] bg-[#FFFF]">
      <div className="h-full w-full flex flex-col">
        <div className="mt-1  w-[70%] mx-auto h-14 mb-[5px] border-b  border-opacity-20">
          <img src={logo} className=" border-black mx-auto " alt="" />
        </div>
        {menusvg.map((item, index) => (
          <div
            className={` w-full mb-5 flex items-center h-12 justify-center cursor-pointer ${
              index === activeIcon ? " opacity-100" : "opacity-20"
            } ${index === 7 ? "mt-auto " : " "} mx-auto`}
          >
            <Link to={index === 1 ? "/datatable" : index === 0 ? "/main" : ""}>
              <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(item.svg)}`}
                alt=""
                key={index}
                onClick={() => handleIconClick(index)}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
