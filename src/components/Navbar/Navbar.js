import React from "react";
import { icons } from "../../constants";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex  justify-between">

      <div className=" rounded-[50%] text-[25px]  h-[57px] w-[57px] items-center justify-center flex bg-icon shadow-lg cursor-pointer text-primary">
        <icons.HiMenu />
      </div>
      <div className=" rotate-90 rounded-[50%] text-[25px]  h-[57px] w-[57px] flex items-center justify-center  bg-icon cursor-pointer shadow-lg text-primary ">
        <icons.MdPlayArrow />
      </div>
        </div>
      <div className="flex justify-center items-center between  form-input  " >
        <input
          className="rounded-[30px] bg-transparent mx-10 w-screen p-4 outline-none  placeholder:text-xl "
          type="text"
          placeholder="Search ..."
          style={{boxShadow:" rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}
        />
      </div>
    </div>
  );
};

export default Navbar;
