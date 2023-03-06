import React from "react";
import socialBarData from "../datas/socialBar.data";

const measure = [0, 100, 200, 300, 400];
const VerticalBar = () => {
  //100 = 48px
  return (
    <div className="w-full h-[360px] rounded-[10px] bg-white flex flex-col justify-between font-light font-grotesk">
      <div className="w-full px-6 flex mt-[35px] justify-between">
        <ul className="flex text-[14px] gap-5">
          <li className=" before:content-[''] before:inline-block before:w-[14px] before:h-[14px] before:rounded-full before:bg-action-primary before:mr-2 before:-mb-0.5">
            Instagram
          </li>
          <li className=" before:content-[''] before:inline-block before:w-[14px] before:h-[14px] before:rounded-full before:bg-action-success before:mr-2 before:-mb-0.5">
            Facebook
          </li>
          <li className=" before:content-[''] before:inline-block before:w-[14px] before:h-[14px] before:rounded-full before:bg-action-warning before:mr-2 before:-mb-0.5">
            Twitter
          </li>
        </ul>
        <div className="flex gap-1">
          <span className="before:content-[''] before:inline-block before:w-1 before:h-1 before:bg-[#CCCCCC] before:rounded-full -mt-2"></span>
          <span className="before:content-[''] before:inline-block before:w-1 before:h-1 before:bg-[#CCCCCC] before:rounded-full -mt-2"></span>
          <span className="before:content-[''] before:inline-block before:w-1 before:h-1 before:bg-[#CCCCCC] before:rounded-full -mt-2"></span>
        </div>
      </div>
      <div className="flex pl-6 w-full">
        <div className="flex flex-col-reverse pb-8 gap-[32px] ">
          {measure.map((item, i) => (
            <p className="text-[10px] mix-blend-normal opacity-[0.4]" key={i}>
              {item}
            </p>
          ))}
        </div>
        <div className="flex w-full justify-around pb-4 pl-4 mr-3 ">
          {socialBarData.map((data, i) => (
            <div className=" max-h-[231px] w-[12px] relative" key={i}>
              <div
                style={{ height: (data.Instagram * 48) / 100 }}
                className={`absolute w-[12px] bg-action-primary rounded-full bottom-5 z-50`}
              ></div>
              <div
                style={{
                  height: ((data.Instagram + data.Facebook) * 48) / 100,
                }}
                className={`absolute w-[12px] h-10 bg-action-success rounded-full bottom-5 z-40`}
              ></div>
              <div
                style={{
                  height:
                    ((data.Instagram + data.Facebook + data.Twitter) * 48) /
                    100,
                }}
                className={`absolute w-[12px] h-10 bg-action-warning rounded-full bottom-5`}
              ></div>
              <p className="absolute bottom-0 opacity-[0.4] mix-blend-normal text-[10px]">
                {data.month}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalBar;
