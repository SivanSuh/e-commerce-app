import React from "react";
import { Link } from "react-router-dom";

const Basket = () => {
  return (
    <div className="h-screen w-10/12 mx-auto">
      <h2>Basket</h2>
      <Link to="/">
        <button className="mt-4 bg-slate-900 text-white">Back To Home</button>
      </Link>
    </div>
  );
};

export default Basket;
