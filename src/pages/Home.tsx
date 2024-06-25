import { Link } from "react-router-dom";
import { NavBar } from "../components/navBar/NavBar";

export const Home = () => {
  return (
    <main className="bg-cover Home-bg h-screen bg-center">
      <NavBar />
      <div className="flex justify-center mt-10 desktop:mt-[15rem]">
        <div className="flex flex-col items-center desktop:flex-row desktop:justify-between desktop:mx-14">
          <div className="text-center desktop:text-start desktop:w-[40%] text-white px-5 tablet:px-[6rem]">
            <h1 className="Hxs text-lightBlue">SO, YOU WANT TO TRAVEL TO</h1>
            <h2 className="mt-5 Hxl tablet:mt-0">SPACE</h2>
            <p className="mt-5 Body  text-lightBlue">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="mt-[8rem] tablet:mt-[6rem] desktop:mr-[5%]">
            <button className="text-center relative z-10 uppercase bg-white text-navy w-[144px] tablet:w-[220px] tablet:h-[220px] desktop:w-[270px] desktop:h-[270px] explore h-[144px] rounded-full Hs transition-all ">
              <Link to={"/destination"}>explore</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
