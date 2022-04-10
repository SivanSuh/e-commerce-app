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

  const DetailClick = () => {
    <Popup />;
  };
  return (
    <div>
      <div className="flex justifty-around mx-auto w-10/12 flex-wrap mt-4">
        {fetchData.map((datas) => {
          return (
            <div
              className="flex flex-col border-2 mx-auto w-80 m-2  justify-between"
              key={datas.id}
            >
              <div className="h-45 my-2">
                <img
                  className="object-cover h-45 border-b  mb-1 "
                  src={datas.image}
                  alt="foto"
                />
              </div>
              <h2 className="my-2">
                <strong>Name : </strong>
                {datas.title}
              </h2>
              <h2 className="my-2">
                <strong>Price : </strong>
                {datas.price + " TL"}
              </h2>
              <div className="flex absolute bottom-0">
                <button
                  className="p-2 bg-cyan-500 w-2/4 hover:text-yellow-500 hover:bg-black"
                  onClick={() => dispatch(addBasket())}
                >
                  add
                </button>
                <Link to={"detail"} className="w-2/4 bg-slate-500 text-white">
                  <button onClick={DetailClick}>Detail</button>
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
