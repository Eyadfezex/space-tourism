import { IoMenuSharp } from "react-icons/io5";
import { logoImg } from "../../utils";
import { navLinks } from "../../constants";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { SideBarContext } from "../../context/SideBarContext";
export const NavBar = () => {
  const Active = useContext(SideBarContext);
  return (
    <nav className=" w-full desktop:pt-10 absolute">
      <div className="flex justify-between items-center">
        <div className="tablet:w-[160px] pl-7 tablet:pl-0 py-5 flex justify-center">
          <Link to={"/"}>
            <img src={logoImg} alt="logo" width={48} />
          </Link>
        </div>
        <button
          className="py-7 px-7  tablet:hidden"
          onClick={() => Active.setActive(true)}
        >
          <IoMenuSharp className="text-lightBlue" size={50} />
        </button>
        <div className="hidden tablet:block after:bg-[#979797] after:h-[0.1px] after:hidden after:desktop:block after:w-[560px] after:top-[50%] after:left-[-55%] after:absolute desktop:backdrop-blur-md tablet:bg-[rgb(255_255_255/5%)] desktop:px-[10rem]">
          <ul className="flex items-center gap-[48px] px-5">
            {navLinks.map((item) => (
              <NavLink
                to={item.to}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "border-0"
                    : isActive
                      ? "border-b-[4px] border-white"
                      : ""
                }
              >
                <li
                  key={item.id}
                  className="py-[3.5rem] tablet:py-[2rem] desktop:py-10 text-white uppercase  transition-all "
                >
                  <div className="flex gap-3 font-bold ">
                    <span className="nav text-desktop-nav">{item.id}</span>
                    <span className="nav text-desktop-nav">{item.title}</span>
                  </div>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
