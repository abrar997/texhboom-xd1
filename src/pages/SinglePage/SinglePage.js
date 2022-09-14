import React from "react";
import { SingList } from "../../components";
import { images, icons } from "../../constants";

const SinglePage = () => {
  return (
    <div className="flex flex-col justify-around">
    
      {/* video div */}
      <div className="flex justify-center pb-[100px]">
        <img
          src={images.s7}
          className="relative z-0 h-[200px] xl:h-[500px] rounded-[30px]
           w-screen object-cover"
        />
        
        <div className="absolute z-1 bg-[#ECF0F3] text-primary top-[10%] xl:top-[25%] cursor-pointer rounded-[50%] flex items-center justify-center shadow-xl text-[50px] h-[98px]  w-[98px] ">
          <icons.AiOutlineSend className="w-[45.66px] h-[46.02]" />
        </div>
     
      </div>

      {/* videos control */}
      <div className="flex justify-around xl:justify-between items-center -mt-[60px]">
        <div className=" text-grey text-[12px]"> 0:00/9:30</div>
        <div className="grid grid-cols-5 gap-2 xl:gap-6">
          <div className="flex items-center  cursor-pointer w-[43px] h-[43px] bg-icon shadow-lg rounded-[50%]  text-primary  justify-center  ">
            1 <icons.TbLetterX className="text-[10px]" />
          </div>
          <div className="w-[43px] h-[43px] cursor-pointer bg-icon shadow-lg rounded-[50%] flex items-center  text-primary justify-center ">
            <icons.IoPlaySkipBackSharp />
          </div>
          <div className="w-[43px] h-[43px] cursor-pointer bg-icon shadow-lg rounded-[50%] flex items-center text-primary  justify-center ">
            <icons.IoPlaySkipForwardSharp />
          </div>
          <div className="w-[43px] h-[43px] cursor-pointer bg-icon shadow-lg rounded-[50%] flex items-center  text-primary justify-center ">
            <icons.MdOutlineCropFree />
          </div>
          <div className=" w-[43px] h-[43px] cursor-pointer bg-icon shadow-lg rounded-[50%] flex items-center  text-primary justify-center ">
            <icons.HiOutlineSparkles />
          </div>
        </div>
      </div>

      {/* video info */}
      <div className="flex justify-between mt-4 ">
        <div className="flex flex-col">
          <h1 className="text-gray font-[900px] text-[25px] "> Ultimate SF</h1>
          <h3 className="text-singlename text-[22px] ">jnice Macapobres </h3>
          <div className=" text-singlename  flex justify-between ">
            <p className="text-[14px]"> + 32 Sats</p>
            <p className="text-[14px]">23 Minutes ago</p>
          </div>
        </div>
        <div className=" w-[54px] h-[54px]  xl:mt-[40px] mt-[20px] mr-[10px] flex justify-center items-center  rounded-[50%] text-2xl  border-[#ECF0F3] text-primary  shadow-xl bg-icon">
          <icons.GiElectric />
        </div>
      </div>

      <div className="flex flex-col mt-[50px]">
        <div className="border-t-[1px] py-2 border-b-[1px]  border-solid border-singlename">
          <div className="flex flex-col">
            <div className="grid grid-cols-5">
              <div className=" col-span-1">
                <img
                  src={images.s1}
                  className="rounded-[50%] xl:w-[125px] xl:h-[126px] md:w-[100px] md:h-[100px]  w-icon h-icon object-cover"
                />
              </div>
              <div className=" text-singlename col-span-4  flex flex-col items-start">
                <div className="w-100 flex-flex-col">
                  <div
                    className="pb-2 border-b-[1px]  
                   border-singlename  w-[90%] "
                  >
                    <p className="text-gray text-[18px]">Singapura </p>
                    <p className="text-[14px]">1.2M subsecribers</p>
                  </div>
                  <div className="flex  justify-between  items-center pt-2 ">
                    <img
                      src={images.s1}
                      className="rounded-[50%] w-[41px] h-[41px] -ml-[50px]"
                    />
                    <div className="p-1 ml-4">
                      <p className="text-gray text-[10px]">Comments 59</p>
                      <p className="text-singlename text-[10px] w-[70%]">
                        Ipsam deserunt so elit. Ipsa explicabo for mollit so
                        eum. Odit cillum sed.
                      </p>
                    </div>
                    <div></div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                    <SingList />
      </div>
    </div>
  );
};

export default SinglePage;
