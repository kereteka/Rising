import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import tick from "../tick.svg";

const Table = ({ userData, rowTick }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [isAscending, setIsAscending] = useState(null);
  const [people, setPeople] = useState([...userData]);
  // const [inputVisibility, setInputVisibility] = useState(false);
  const [status, setStatus] = useState("All");
  const [opacity, setOpacity] = useState("opacity-0");
  const [inputWidth, setInputWidth] = useState("0");
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");

  const sortTable = (title) => {
    let data = [...people];

    if (isAscending === null) {
      data.sort((a, b) => (a[title] < b[title] ? -1 : 1));
      setIsAscending(true);
    } else if (isAscending) {
      data.sort((a, b) => (a[title] > b[title] ? -1 : 1));
      setIsAscending(false);
    } else {
      data = [...userData];
      setIsAscending(null);
    }
    setPeople(data);
  };

  const handleRowClick = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const searchHandle = () => {
    // setInputVisibility((prevState) => !prevState);
    setInputWidth((prevWidth) => (prevWidth === "0" ? "180px" : "0"));
  };

  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      // setInputVisibility(false);
      setInputWidth("0");
    }
  };

  const searchPeople = (people, query, status) => {
    return people.filter((person) => {
      const nameMatch = person.name.toLowerCase().includes(query.toLowerCase());
      const statusMatch =
        status === "All" ||
        person.status.toLowerCase() === status.toLowerCase();
      return nameMatch && statusMatch;
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  });
  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      // setInputVisibility(false);
      setInputWidth("0");
    }
  };
  return (
    <div className="w-full mx-auto mt-5 bg-white font-grotesk ">
      <table className="min-w-full relative">
        <thead className=" w-full">
          <tr className="w-full ">
            {Object.keys({
              name: people[0].name,
              status: people[0].status,
              size: people[0].sise,
              date: people[0].date,
              time: people[0].date,
            }).map((key, index) => (
              <th
                key={index}
                className={` text-left font-normal cursor-pointer  px-5 ${
                  key === "name" || key === "status" ? " w-[25%]" : "w-[15%]"
                } `}
              >
                <div className="flex items-center text-[#999999]  ">
                  <div
                    onClick={() => sortTable(key)}
                    className={`capitalize  `}
                  >
                    {key}
                  </div>
                  {key === "name" ? (
                    <div className="absolute left-10 flex pl-5">
                      <BsSearch
                        onClick={searchHandle}
                        className="ml-2 mt-1  "
                      />
                      <input
                        ref={inputRef}
                        style={{ width: inputWidth }}
                        className=" top-2 transition-all duration-500 ml-2 bg-gray-100 rounded-full indent-2 "
                        type="text"
                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                      />
                    </div>
                  ) : key === "status" ? (
                    <>
                      :
                      <div className="relative inline-block">
                        <div className="flex ml-2">
                          {status}
                          <div className="w-1 h-1 text-[#CCCCCC] rotate-90 ml-6 mt-1">
                            ...
                          </div>
                        </div>
                        <div
                          className={`absolute ${opacity}  duration-500 z-40 -mt-10 `}
                          onMouseLeave={() => setOpacity("opacity-0")}
                        >
                          <div className="py-2 bg-white rounded-md shadow-xl">
                            <div
                              onMouseEnter={() => setOpacity("opacity-100")}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                setStatus("All");
                                setOpacity("opacity-0");
                              }}
                            >
                              All
                            </div>
                            <div
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                setStatus("In Progress");
                                setOpacity("opacity-0");
                              }}
                            >
                              In Progress
                            </div>
                            <div
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                setStatus("Finished");
                                setOpacity("opacity-0");
                              }}
                            >
                              Finished
                            </div>
                            <div
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                              onClick={() => {
                                setStatus("Finished");
                                setOpacity("opacity-0");
                              }}
                            >
                              Rejected
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : key === "size" ? (
                    <div
                      className="flex flex-col gap-0.5 ml-1"
                      onClick={() => sortTable(key)}
                    >
                      <img className=" " src={"upArrow.svg"} alt="" />
                      <img className=" " src={"downArrow.svg"} alt="" />
                    </div>
                  ) : key === "date" ? (
                    <div className="  text-[#CCCCCC] rotate-90 ml-4 ">...</div>
                  ) : key === "time" ? (
                    <div className="  text-[#CCCCCC] rotate-90 ml-4 ">...</div>
                  ) : (
                    ""
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {searchPeople(people, query, status).map(
            ({ name, status, size, date, time }, index) => (
              <tr
                key={index}
                className={`h-[80px] shadow-[0_-1px_0px_rgba(206,206,206,0.25)]
                }`}
              >
                {Object.values({ name, status, size, date, time }).map(
                  (value, i) => (
                    <td key={i} className="px-5">
                      <div className="flex items-center">
                        {value === name && rowTick === "true" ? (
                          <div
                            onClick={() => handleRowClick(index)}
                            className="min-w-[30px] h-[30px] rounded-[10px] cursor-pointer bg-action-info mr-2 "
                          >
                            {selectedRows.includes(index) ? (
                              <img
                                className="m-auto mt-0.5"
                                src={tick}
                                alt=""
                              />
                            ) : (
                              ""
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                        <div className=" font-light">{value}</div>
                      </div>
                    </td>
                  )
                )}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
