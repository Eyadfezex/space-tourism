import { useState } from "react";
import { NavBar } from "../components/navBar/NavBar";
import { destinationsData } from "../constants";
import { bg_2 } from "../utils";

export const Destination = () => {
  const [des, setDes] = useState<string>("1");
  const destination = destinationsData.find((item) => item.id === des);
  return (
    <main
      className="text-white  bg-cover bg-center "
      style={{ backgroundImage: `url(${bg_2})` }}
    >
      <NavBar />
      <div className="flex items-center gap-4 Hxs justify-center mt-7 tablet:justify-start tablet:ml-14 desktop:ml-[12rem] tablet:mt-[4rem]">
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
          <ul className="flex gap-5 Nav uppercase ">
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
            <h2 className="Hl uppercase mt-3">{destination?.name}</h2>
            <p className=" text-lightBlue after:w-full after:h-[1.5px] after:bg-[#53565e] after:mt-8 after:block desktop:after:mt-10">
              {destination?.description}
            </p>
            <div className="flex flex-col items-center text-center gap-5 my-5 tablet:flex-row justify-center desktop:justify-start tablet:gap-[35%] desktop:gap-[5rem] desktop:mt-10">
              <div>
                <span className="SHs text-lightBlue uppercase">
                  Avg. Distance
                </span>
                <p className="SHl uppercase">{destination?.distance}</p>
              </div>
              <div>
                <span className="SHs text-lightBlue uppercase">
                  Est. travel time
                </span>
                <p className="SHl uppercase">{destination?.travelTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
