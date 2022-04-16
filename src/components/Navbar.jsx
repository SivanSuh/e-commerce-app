import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { countIncrease } from "../redux/action/action";
const Navbar = (props) => {
  console.log(props.count);
  return (
    <nav className=" bg-gray-900 text-white  p-5">
      <div className=" sm:w-4/5 w-full mx-auto flex justify-between items-center">
        <h1 className="sm:text-2xl text-lg">E-COMMERCE APP</h1>
        <div className="w-auto  ">
          <button
            type="button"
            className="bg-yellow-500 p-2 rounded hover:bg-yellow-300"
          >
            <Link to="/basket">
              <button>Basket </button>
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
export default connect(mapStateToProps, { countIncrease })(Navbar);
