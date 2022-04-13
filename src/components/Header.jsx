import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBasket } from "../redux/EcommerceSlice/EcommerceSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const dispatch = useDispatch();
  const [fetchData, setFetchData] = useState([]);
  const FetchApi = async () => {
    const responce = await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data);
    console.log(responce);
    setFetchData(responce);
  };
  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <div>
      <div className="flex justifty-around mx-auto md:w-10/12 w-full h-full  flex-wrap mt-4">
        {fetchData.map((datas) => {
          return (
            <div
              className="flex flex-col relative border-2 mx-auto md:w-80 w-96 h-96 m-2 p-2 "
              key={datas.id}
            >
              <img
                className="object-contain w-full h-56"
                src={datas.image}
                alt="foto"
              />
              <h4 className="text-sm sm:text-base">{datas.title}</h4>
              <h4 className="my-2 font-bold">{datas.price + " TL"}</h4>
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
