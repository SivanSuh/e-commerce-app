import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBasket } from "../redux/EcommerceSlice/EcommerceSlice";
import { useEffect } from "react";
import Popup from "./Popup";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [fetchData, setFetchData] = useState([]);
  const FetchApi = async () => {
    const responce = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
    );
    console.log(responce);
    setFetchData(responce);
  };
  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <div>
      <div className="flex justifty-around mx-auto w-10/12 flex-wrap mt-4">
        {fetchData.map((datas) => {
          return (
            <div
              className="flex flex-col relative border-2 mx-auto w-80 h-auto m-2  justify-between"
              key={datas.id}
            >
              <img
                className="object-contain h-80   mb-1 "
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
              <div className="flex justify-center items-center  absolute bottom-0 right-0 left-0">
                <button
                  className="font-bold p-2 bg-yellow-400 w-2/4  hover:text-white"
                  onClick={() => dispatch(addBasket())}
                >
                  add
                </button>
                <Link
                  to={`detail/${datas.id}`}
                  className="font-bold p-2 w-2/4 bg-black text-white text-center hover:text-yellow-500"
                >
                  <button>Detail</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
