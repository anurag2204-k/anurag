import React from 'react';
import profilePic from '../assets/ag.jpg'
import ProfileInfo from '../components/ProfileInfo';
const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-mono" >
      <div className="max-w-4xl w-full bg-white p-8 m-2 rounded-lg shadow-lg">

        <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4 p-8">
          <div className="font-extrabold text-4xl text-center text-gray-800">
            <p>
              <span className="text-blue-600">🌟 Hello!</span>  My name is
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Anurag Khobragade
              </span> ✨
            </p>
            <p className="mt-2 text-lg text-gray-500">
              🎨 Designer | 💻 Developer | 🚀 Dreamer
            </p>
          </div>


          <img
            src='/linkedin+profile.png'
            alt="Anurag Khobragade's Photo"
            className="rounded-full w-40 h-40 object-cover shadow-lg border-4 border-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1 hover:scale-105 transform transition duration-300 ease-in-out"
          />

        </div>
        <p className="text-lg text-gray-700 mb-4">
          We are a passionate team committed to building innovative solutions and
          providing exceptional services. Our goal is to help businesses and
          individuals reach their full potential through technology and creativity.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          With years of experience in the industry, we bring expertise in
          web development, data analysis, and design. Our team is dedicated to
          delivering high-quality products that meet the unique needs of our clients.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-8">Our Values</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>Innovation: Continuously striving to push the boundaries of technology.</li>
          <li>Integrity: Upholding honesty, transparency, and ethical practices.</li>
          <li>Collaboration: Working together with our clients to achieve shared goals.</li>
        </ul>
        <ProfileInfo />
      </div>
    </div>
  );
};

export default AboutUs;
