import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const Basket = () => {
  const { productId } = useParams();
  const [addBasket, setAddBasket] = useState([]);

  const fetchBasket = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.data);
    console.log(response);
    setAddBasket(response);
  };
  useEffect(() => {
    fetchBasket();
  }, []);
  return (
    <div className="h-screen w-10/12 mx-auto">
      <h2>Basket</h2>
      <h2>{addBasket.title}</h2>
      <h2>{addBasket.price}</h2>
      <h2>{addBasket.description}</h2>
      <Link to="/">
        <button className="mt-4 bg-slate-900 text-white">Back To Home</button>
      </Link>
    </div>
  );
};

export default Basket;
