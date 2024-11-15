import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold ">Find Us On</h2>
      <div className="flex flex-col gap-5 mt-5">
        
        <div className="join join-vertical">
          <button className="btn join-item"><FaFacebook size={30}></FaFacebook> FaceBook</button>
          <button className="btn join-item"><CiTwitter size={30} /> Twitter</button>
          <button className="btn join-item"><FaInstagram size={30} /> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
