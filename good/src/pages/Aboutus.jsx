import React from "react";
import ProfileInfo from "../components/ProfileInfo";
import { FaLightbulb, FaShieldAlt, FaUsers } from "react-icons/fa";

const AboutUs = ({ isIPhoneContext = false }) => {
  return (
    <div className={`bg-gray-100 min-h-screen flex items-center justify-center font-mono no-scrollbar ${isIPhoneContext ? 'p-2' : ''}`}>
      <div className={`max-w-4xl w-full bg-white rounded-lg shadow-lg ${isIPhoneContext ? 'p-4 m-1' : 'p-8 m-2'}`}>
        <div className={`flex flex-col items-center ${isIPhoneContext ? 'space-y-3 p-3' : 'space-y-6 p-8'}`}>
          {/* Header */}
          <div className={`font-extrabold text-center text-gray-800 ${isIPhoneContext ? 'text-base' : 'text-2xl sm:text-4xl'}`}>
            <p>
              <span className={`text-blue-600 ${isIPhoneContext ? 'text-sm' : 'text-xl sm:text-2xl'}`}>🌟 Hello!</span> My name is
              <br />
              <span className={`bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ${isIPhoneContext ? 'text-lg' : 'text-3xl sm:text-5xl'}`}>
                Anurag Khobragade
              </span>{" "}
              ✨
            </p>
            <p className={`mt-2 text-gray-500 ${isIPhoneContext ? 'text-xs' : 'text-sm sm:text-lg'}`}>
              🎨 A passionate Computer Science enthusiast
            </p>
          </div>

          {/* Profile Image */}
          <img
            src="/linkedin+profile.png"
            alt="Anurag Khobragade's Photo"
            className={`rounded-full object-cover shadow-lg border-4 border-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1 hover:scale-105 transform transition duration-300 ease-in-out ${isIPhoneContext ? 'w-20 h-20' : 'w-32 h-32 sm:w-40 sm:h-40'}`}
          />
        </div>

        {/* Description */}
        <p className={`text-gray-700 mb-4 ${isIPhoneContext ? 'text-xs' : 'text-sm sm:text-base md:text-lg'}`}>
        Full-Stack Developer from Nagpur, India, passionate about crafting scalable, high-performance web applications that push boundaries. With a toolkit packed with Node.js, React.js, TypeScript, and Next.js—plus a knack for RESTful APIs and real-time systems—I thrive at the intersection of sleek frontends and robust backends.
        </p>
        <p className={`text-gray-700 mb-4 ${isIPhoneContext ? 'text-xs' : 'text-sm sm:text-base md:text-lg'}`}>
          With a strong foundation in data structures, algorithms, and full-stack development, 
          I enjoy creating impactful projects using cutting-edge technologies. My experience 
          ranges from leading collaborative teams on software projects to tackling complex 
          challenges in the realms of development, computer vision and machine learning.
        </p>

        {/* Values Section */}
        {/* <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mt-8">
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
        </ul> */}

        {/* Profile Info */}
        <ProfileInfo isIPhoneContext={isIPhoneContext} />
      </div>
    </div>
  );
};

export default AboutUs;
