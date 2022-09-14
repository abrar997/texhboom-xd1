import React from "react";
import { icons } from "../../constants";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex  justify-between">

      <div className=" rounded-[50%]  p-5 text-[25px] items-center flex xl:p-3 bg-icon shadow-lg cursor-pointer text-primary xl:text-[37px]">
        <icons.HiMenu />
      </div>
      <div className=" rotate-90 rounded-[50%]  p-5 text-[25px] items-center flex xl:p-3 bg-icon cursor-pointer shadow-lg text-primary xl:text-[37px]]">
        <icons.MdPlayArrow />
      </div>
        </div>
      <div className="flex justify-center items-center between  form-input mt-5">
        <input
          className="rounded-[30px] bg-transparent mx-10 shadow-inner xl:w-screen p-4 outline-none  placeholder:text-xl "
          type="text"
          placeholder="Search ..."
        />
      </div>
    </div>
  );
};

export default Navbar;
