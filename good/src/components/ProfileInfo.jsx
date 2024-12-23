import React from "react";

const ProfileInfo = () => {
  const info = [
    ["Name", "Anurag Khobragade"],
    ["Role", "Student"],
    ["Location", "Nagpur, India"],
    ["email", "bt22csd014@iiitn.ac.in"],
    
  ];

  return (
    <div className="mt-6 p-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-xl shadow-lg">
    <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">💡 My Information</h2>
    <table className="table-auto w-full border-collapse bg-white rounded-md shadow-sm overflow-hidden">
      <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <tr>
          {["📋 Field", "🔍 Details"].map((header, idx) => (
            <th 
              key={idx} 
              className="px-6 py-3 text-left font-semibold"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {info.map(([field, detail], idx) => (
          <tr 
            key={idx} 
            className={idx % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}
          >
            <td className="px-6 py-3 text-gray-700">{field}</td>
            <td className="px-6 py-3 text-gray-700">{detail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};

export default ProfileInfo;
