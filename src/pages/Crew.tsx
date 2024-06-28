import { useState } from "react";
import { bg_3 } from "../utils";
import { crewData } from "../constants";

export const Crew = () => {
  const [crewM, setCrewM] = useState<string>("1");
  const crew = crewData.find((item) => item.id === crewM);
  return (
    <main
      className="bg-cover bg-center desktop:pb-20 "
      style={{ backgroundImage: `url(${bg_3})` }}
    >
      <div className="flex justify-center pt-[10rem]">
        <div className="flex flex-col items-center desktop:flex-row desktop:px-[10rem]">
          <div className="text-center desktop:text-start flex flex-col desktop:items-start ">
            <h1 className="  gap-5 text-white uppercase Hxs relative desktop:top-[-9rem] ">
              <span className="text-5xl font-bold text-[#53565e]">02</span> Meet
              your crew
            </h1>
            <div className="mt-16 px-5 desktop:px-0 desktop:w-[70%]">
              <h2 className="Hs uppercase text-[#53565e]">{crew?.position}</h2>
              <h3 className="text-white Hm uppercase">{crew?.name}</h3>
              <p className="mt-5 Body text-lightBlue">{crew?.description}</p>
            </div>
            <div className="mt-10 desktop:top-[7rem] relative">
              <ul className="flex item-center justify-center gap-8">
                {crewData.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => setCrewM(item.id)}
                    className={`w-[10px] h-[10px] desktop:w-[15px] desktop:h-[15px] rounded-full bg-[#53565e] cursor-pointer  ${item.id === crewM ? "!bg-white" : ""}`}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center pb-10">
            <img
              src={crew?.img}
              alt={crew?.name}
              className="w-[80%] desktop:w-[90%]  mt-10"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
