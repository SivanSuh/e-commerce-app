import React from "react";
import { data } from "./data";
import { useDispatch } from "react-redux";
import { addBasket } from "../redux/EcommerceSlice/EcommerceSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justifty-around mx-auto w-10/12 flex-wrap mt-4">
        {data.map((datas) => {
          return (
            <div className="border-2 mx-auto w-80 m-2" key={datas._id}>
              <img
                className="w-full  mb-1 hover:object-fi"
                src={datas.image}
                alt="foto"
              />
              <h2 className="my-2">
                <strong>Name : </strong>
                {datas.title}
              </h2>
              <h2 className="my-2">
                <strong>Price : </strong>
                {datas.price + " TL"}
              </h2>
              <div className="flex">
                <button
                  className="p-2 bg-cyan-500 w-2/4 hover:text-yellow-500 hover:bg-black"
                  onClick={() => dispatch(addBasket())}
                >
                  add
                </button>
                <button className="w-2/4 bg-slate-500 text-white">
                  Detail
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
