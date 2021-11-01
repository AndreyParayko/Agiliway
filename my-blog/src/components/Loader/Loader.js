import React from "react";
import Gif from "../../assets/Gif.gif";
const Loader = () => {
  return (
    <div className="content">
      <div className="text-center">
        <img alt="Loading..." className="loader" src={Gif} />
      </div>
    </div>
  );
};
export default Loader;
