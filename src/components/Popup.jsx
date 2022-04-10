import React from "react";
import { Link } from "react-router-dom";

const Popup = () => {
  return (
    <div className="h-screen w-10/12 mx-auto">
      <h2>Popup</h2>
      <Link to="/">
        <button className="mt-4 bg-black text-white p-2">Return Home</button>
      </Link>
    </div>
  );
};

export default Popup;
