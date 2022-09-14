import React from "react";
import { data } from "../../constants";

const SingList = () => {
  return (
    <div>
      {data.playlist.map((items) => {
        return (
          <div className="grid grid-cols-5  xl:p-1 " key={items.id}>
            <div className="col-span-1 p-2">
              <img
                src={items.img}
                className="rounded-[50%] xl:w-[100px] xl:h-[100px] md:w-[70px] md:h-[70px] w-icon h-icon
                ml-0 md:ml-5
                object-cover"
              />
            </div>
            <div className="col-span-4 flex justify-between items-center text-gray border-b-[1px] border-singlename ">
              <div>
                <p className=" text-[18px]">{items.name}</p>
                <p className="text-[15px]">{items.singName}</p>
              </div>
              <div className="w-[31px] h-[31px] cursor-pointer bg-icon shadow-lg rounded-[50%] flex items-center  text-primary justify-center ">
                {items.icon}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingList;
