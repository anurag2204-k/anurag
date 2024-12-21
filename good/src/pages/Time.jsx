import React from "react";
import ProfileInfo from "../components/ProfileInfo";
import ProfilePhoto from "/ag.jpg";

const Timee = () => (
  <div className="p-6 max-w-4xl mx-auto">
    <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="font-bold text-3xl text-blue-600">
        Anurag Khobragade
        </div>
      
      <img src={ProfilePhoto} alt="Your Photo" className="rounded-full w-40 h-40 object-cover shadow-md" />
    </div>
    <ProfileInfo />
  </div>
);

export default Timee;
