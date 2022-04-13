import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen w-10/12 mx-auto ">
      <div className="w-96 h-96 flex flex-col justify-center items-center mx-auto">
        <h1 className="text-7xl">Error</h1>
        <Link
          to="/"
          className="mt-3 p-2 bg-purple-300 rounded hover:text-white"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
