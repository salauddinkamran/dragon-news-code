import React from "react";
import swimmingImage from "../../assets/image/swimming.png";
import classImage from "../../assets/image/class.png"
import playImage from "../../assets/image/playground.png"

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">Q-Zone</h2>
      <div className="flex flex-col items-center space-y-5">
        <img src={swimmingImage} alt="" />
        <img src={classImage} alt="" />
        <img src={playImage} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
