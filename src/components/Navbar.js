import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const count = useSelector((state) => state.basket.value);

  return (
    <nav className="flex justify-around items-center bg-gray-900 text-white  p-5">
      <h1 className="text-2xl">E-COMMERCE APP</h1>
      <div className="w-auto  ">
        <button
          type="button"
          className="bg-yellow-500 p-2 rounded hover:bg-yellow-300"
        >
          <Link to="/basket">
            <p>Basket : {count}</p>
          </Link>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
