import { IoMenuSharp } from "react-icons/io5";
import { logoImg } from "../../utils";
import { navLinks } from "../../constants";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav className=" w-full d:mt-7">
      <div className="flex justify-between items-center">
        <div className="t:w-[160px] pl-7 t:pl-0 py-7  flex justify-center">
          <img src={logoImg} alt="logo" width={48} />
        </div>
        <button className="py-7 px-7  t:hidden">
          <IoMenuSharp className="text-LBlue " size={50} />
        </button>
        <div className="hidden t:block after:bg-[#979797] after:h-[0.1px] after:hidden after:d:block after:w-[560px] after:top-[50%] after:left-[-55%] after:absolute backdrop-blur-md  d:px-[10rem]">
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
                  className="py-[3.5rem] d:py-10 text-white uppercase hover:border-b-[2px] transition-all hover:border-white"
                >
                  <div className="flex gap-3 font-bold ">
                    <span className="Nav text-Nav">{item.id}</span>
                    <span className="Nav text-Nav">{item.title}</span>
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
