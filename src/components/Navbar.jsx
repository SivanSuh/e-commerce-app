import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const products = useSelector((state) => state.values.card);
  return (
    <nav className="sticky top-0 z-10 bg-gray-900 text-white  p-5">
      <div className=" sm:w-4/5 w-full mx-auto flex justify-between items-center">
        <h1 className="sm:text-2xl text-lg">E-COMMERCE APP</h1>
        <div className="w-auto  ">
          <button className="bg-yellow-500 p-2 rounded hover:bg-yellow-300">
            <Link to="/basket">
              <div>Basket {products.length} </div>
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
