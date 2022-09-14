import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../constants";
const List = () => {
  return (
    <div className="app__home-list grid mt-3 md:grid-cols-4 xl:mt-10 mb-10 grid-cols-3 xl:grid-cols-6 gap-5 ">
      {data.sings.map((items, index) => {
        return (
          <div
            key={index}
            className="app__home-list-img w-[100px] xl:w-[200px] rounded-[30px]  "
          >
            <Link to="single">
              <img
                src={items.img}
                className="rounded-[35px] object-cover w-[150px] h-[100px] xl:w-[300px] xl:h-[200px] "
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default List;
