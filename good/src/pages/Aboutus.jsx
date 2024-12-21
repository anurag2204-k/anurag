import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">About Us</h1>
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
      </div>
    </div>
  );
};

export default AboutUs;
