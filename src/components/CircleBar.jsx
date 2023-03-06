import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import socialData from "../datas/social.data";
const Circlebar = () => {
  return (
    <div className="flex flex-col w-full h-[360px] bg-white rounded-[10px] font-light font-grotesk">
      <div className="flex justify-between mt-6 mx-8">
        <h1 className=" font-normal">Title</h1>
        <div className="flex gap-1">
          <span className="before:content-[''] before:inline-block before:w-1 before:h-1 before:bg-[#CCCCCC] before:rounded-full"></span>
          <span className="before:content-[''] before:inline-block before:w-1 before:h-1 before:bg-[#CCCCCC] before:rounded-full"></span>
          <span className="before:content-[''] before:inline-block before:w-1 before:h-1 before:bg-[#CCCCCC] before:rounded-full"></span>
        </div>
      </div>
      <div className="flex justify-between mt-4 mx-8 ">
        <ul className="flex gap-4 ">
          {[socialData[0], socialData[1], socialData[3], socialData[2]].map(
            (data, i) => (
              <li className="flex gap-2 text-[14px]" key={i}>
                <div
                  className="w-[14px] h-[14px] rounded-full mt-1"
                  style={{ backgroundColor: data.progressColor }}
                ></div>
                {data.title}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="flex bg-white mt-12 mr-6   ">
        {socialData.map((data, i) => (
          <div key={i} className="w-[20%] ml-6 ">
            <CircularProgressbar
              styles={{
                background: {
                  fill: data.bgColor,
                },
                path: {
                  stroke: data.progressColor,
                },
                trail: {
                  stroke: data.bgColor,
                },
              }}
              value={data.percentage}
              text={`${data.percentage}%`}
              background={true}
            />
          </div>
        ))}
      </div>
      <p className="mt-8 mix-blend-normal opacity-[0.4] text-[14px] ml-8 mr-8">
        Every large design company whether it’s a multi-national branding
        corporation or a regular down at heel tatty magazine publisher needs to
        fill holes in the workforce.
      </p>
    </div>
  );
};

export default Circlebar;
