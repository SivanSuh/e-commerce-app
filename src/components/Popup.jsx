import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Popup = () => {
  const [veri, setVeri] = useState([]);
  const { productId } = useParams();

  const fetchDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.data);
    console.log(response);
    setVeri(response);
  };
  useEffect(() => {
    fetchDetail();
  }, []);
  return (
    <div className="h-auto w-10/12  mx-auto">
      <div className="w-full  flex justify-center  my-8 md:flex-nowrap flex-wrap  items-center">
        <div className="w-80">
          <img className="w-full" src={veri.image} alt="foto" />
        </div>
        <div className=" w-2/4 mx-auto">
          <h2>
            <strong>Title : </strong>
            {veri.title}
          </h2>
          <p className="my-3">
            <strong>Description : </strong>
            {veri.description}
          </p>
          <h2>
            <strong>Price : </strong>
            {veri.price + " TL"}
          </h2>
        </div>
      </div>
      <Link to="/">
        <button className="mt-4 bg-black text-white p-2 hover:text-yellow-300 rounded">
          Return Home
        </button>
      </Link>
    </div>
  );
};

export default Popup;
