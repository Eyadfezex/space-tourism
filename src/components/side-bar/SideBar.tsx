import { IoCloseOutline } from "react-icons/io5";
import { navLinks } from "../../constants";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { SideBarContext } from "../../context/SideBarContext";

interface props {
  classes?: string;
}
export const SideBar = ({ classes }: props) => {
  const Active = useContext(SideBarContext);
  return (
    <div
      className={`h-screen  fixed right-0 w-[65%] tablet:hidden top-0 backdrop-blur-md z-20 overflow-hidden ${classes} ${Active.active ? "block" : "hidden"}`}
    >
      <div className="flex flex-col mt-[2rem] px-5 ">
        <div className="flex justify-end">
          <button onClick={() => Active.setActive(false)}>
            <IoCloseOutline className="text-lightBlue text-large" />
          </button>
        </div>
        <ul className="flex flex-col items-start mt-[6rem] gap-10 ">
          {navLinks.map((item) => (
            <NavLink
              to={item.to}
              key={item.id}
              className={({ isActive, isPending }) =>
                isPending
                  ? "border-0"
                  : isActive
                    ? "  border-b-2 border-b-white w-full "
                    : ""
              }
            >
              <div className="flex gap-4 text-white uppercase Nav">
                <p>{item.id}</p>
                <p>{item.title}</p>
              </div>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};
