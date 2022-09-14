import React from "react";
import { icons } from "../../constants";
const Footer = () => {
const data=[
  {ico:<icons.BsMenuButtonWide/> ,link:"" },
  {ico:<icons.FiMessageSquare />,link:"" },
  {ico:<icons.GiElectric/>,link:"" },
  {ico:<icons.AiOutlineShareAlt />,link:"" },
]

  return (
    <div className="flex justify-center items-center bg-primary  border-[1px] border-footer fixed bottom-0 left-0 right-0">
    {data.map((items,index)=>{
      return (
        <div key={index} className='m-4 rounded-[50%] text-xl  border-[#ECF0F3] text-primary  p-3 shadow-xl bg-icon '>
          <a href={items.link}>{items.ico} </a>
           </div>
      )
    })}
     </div>
  );
};

export default Footer;
