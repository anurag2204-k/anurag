import React from "react";
import ProfileInfo from "../components/ProfileInfo";
import { FaLightbulb, FaShieldAlt, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-mono">
      <div className="max-w-4xl w-full bg-white p-8 m-2 rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4 p-8">
          {/* Header */}
          <div className="font-extrabold text-2xl sm:text-4xl text-center text-gray-800">
            <p>
              <span className="text-blue-600 text-xl sm:text-2xl">🌟 Hello!</span> My name is
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent text-3xl sm:text-5xl">
                Anurag Khobragade
              </span>{" "}
              ✨
            </p>
            <p className="mt-2 text-sm sm:text-lg text-gray-500">
              🎨 A passionate Computer Science enthusiast
            </p>
          </div>

          {/* Profile Image */}
          <img
            src="/linkedin+profile.png"
            alt="Anurag Khobragade's Photo"
            className="rounded-full w-24 h-24 sm:w-40 sm:h-40 object-cover shadow-lg border-4 border-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1 hover:scale-105 transform transition duration-300 ease-in-out"
          />
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
          With a flair for solving real-world problems through innovative software solutions. 
          Currently pursuing my Bachelor's in Computer Science and Engineering at the Indian 
          Institute of Information Technology, Nagpur, I am driven by a deep curiosity for 
          data science, artificial intelligence, and building scalable applications.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
          With a strong foundation in data structures, algorithms, and full-stack development, 
          I enjoy creating impactful projects using cutting-edge technologies. My experience 
          ranges from leading collaborative teams on software projects to tackling complex 
          challenges in the realms of data analytics and machine learning.
        </p>

        {/* Values Section */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mt-8">
          My Values
        </h2>
        <ul className="list-disc pl-6 mt-4 text-sm sm:text-base md:text-lg text-gray-700 space-y-2">
          <li className="flex items-center">
            <FaLightbulb className="text-purple-500 mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span>Innovation: I am passionate about pushing the boundaries of technology to develop creative and effective solutions.</span>
          </li>
          <li className="flex items-center">
            <FaShieldAlt className="text-purple-500 mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span>Integrity: I uphold honesty, transparency, and ethical practices in all my work and interactions.</span>
          </li>
          <li className="flex items-center">
            <FaUsers className="text-purple-500 mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span>Collaboration: I thrive in team environments, working closely with clients and colleagues to achieve common goals.</span>
          </li>
        </ul>

        {/* Profile Info */}
        <ProfileInfo />
      </div>
    </div>
  );
};

export default AboutUs;
