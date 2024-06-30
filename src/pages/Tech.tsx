import { useState } from "react";
import { bg_4 } from "../utils";
import { technologyData } from "../constants";

export const Tech = () => {
  const [tech, setTech] = useState<string>("1");
  const technology = technologyData.find((item) => item.id === tech);

  return (
    <main
      className="w-full bg-cover bg-center overflow-hidden h-screen  tablet:h-[67rem] desktop:h-[65rem]"
      style={{ backgroundImage: `url(${bg_4})` }}
    >
      <div className="flex justify-center pt-[8rem]">
        <div className="flex flex-col items-center tablet:items-start  gap-[5rem] desktop:gap-0">
          <h1 className="text-white uppercase Hxs tablet:pl-10 desktop:mt-10">
            <span className="text-5xl font-bold text-[#53565e]">03</span> space
            launch 101
          </h1>
          <div className="flex flex-col items-center gap-5 tablet:h-fit desktop:flex-row-reverse ">
            <div className="h-[35%] desktop:h-full desktop:w-full  overflow-hidden">
              <img
                src={technology?.img}
                alt={technology?.name}
                className=" translate-y-[-9rem]   desktop:translate-y-0"
              />
            </div>
            <div className="flex flex-col items-center px-5 tablet:px-10 desktop:flex-row gap-7 desktop:pl-14 ">
              <ul className="flex desktop:flex-col gap-5">
                {technologyData.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => setTech(item.id)}
                    className={`px-8 py-4  border Hs border-[#ffffff40] rounded-full ${tech === item.id ? "bg-white" : "text-white"}`}
                  >
                    {item.id}
                  </li>
                ))}
              </ul>
              <div className="text-center desktop:text-start desktop:flex desktop:flex-col desktop:gap-5 desktop:w-[50%]">
                <h2 className="text-[#ffffff40] Hs uppercase">
                  the terminology...
                </h2>
                <h3 className="Hm uppercase text-white">{technology?.name}</h3>
                <p className="Body text-lightBlue">{technology?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
