import { useState } from "react";
import { destinationsData } from "../constants";
import { bg_2 } from "../utils";

export const Destination = () => {
  const [des, setDes] = useState<string>("1");
  const destination = destinationsData.find((item) => item.id === des);
  return (
    <main
      className="text-white bg-center bg-cover "
      style={{ backgroundImage: `url(${bg_2})` }}
    >
      <div className="flex items-center gap-4 Hxs justify-center pt-[10rem] tablet:justify-start tablet:ml-14 desktop:ml-[12rem] tablet:pt-[10rem] ">
        <span className="font-extrabold text-[#53565e]">01</span>
        <h1 className="uppercase">pick your destination</h1>
      </div>

      <div className="flex items-center justify-center flex-col desktop:flex-row desktop:gap-[7rem] ">
        <img
          src={destination?.img}
          alt={destination?.name}
          className="w-[55%] tablet:w-[45%] desktop:w-[30%]"
        />
        <div className="flex flex-col items-center desktop:items-start desktop:w-[25%]">
          <ul className="flex gap-5 uppercase Nav ">
            {destinationsData.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer text-lightBlue pb-1 ${item.id === des ? "text-white border-white border-b-[4px]" : ""}`}
                onClick={() => setDes(item.id)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className="text-center px-5 tablet:px-[7rem] desktop:px-0 desktop:text-start">
            <h2 className="mt-3 uppercase Hl">{destination?.name}</h2>
            <p className=" text-lightBlue after:w-full Body after:h-[1.5px] after:bg-[#53565e] after:mt-8 after:block desktop:after:mt-10">
              {destination?.description}
            </p>
            <div className="flex flex-col items-center text-center gap-5 my-5 tablet:flex-row justify-center desktop:justify-start tablet:gap-[35%] desktop:gap-[5rem] desktop:mt-10">
              <div>
                <span className="uppercase SHs text-lightBlue">
                  Avg. Distance
                </span>
                <p className="uppercase SHl">{destination?.distance}</p>
              </div>
              <div>
                <span className="uppercase SHs text-lightBlue">
                  Est. travel time
                </span>
                <p className="uppercase SHl">{destination?.travelTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
