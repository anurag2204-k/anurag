import React from "react";

const ProfileInfo = () => {
  const info = [
    ["Name", "Anurag Khobragade"],
    ["Role", "Student"],
    ["Location", "Nagpur, India"],
    ["College", "Indian Institute of Information Technology, Nagpur"],
    ["Year", <p>3<sup>rd</sup> Year</p>],
    ["Email", <a href="mailto:bt22csd014@iiitn.ac.in" >bt22csd014@iiitn.ac.in</a>],
    ["Email", <a href="mailto:anuragk2204@gmail.com" className="text-gray-800">anuragk2204@gmail.com</a>],

    ["Phone", "+91 8625971496"],
    ["Github", <a href="https://github.com/anurag2204-k">https://github.com/anurag2204-k</a>],
    ["Twitter", <a href="https://x.com/anurag_k04">https://x.com/anurag_k04</a>],
    ["Linkedin", <a href="https://www.linkedin.com/in/anuragk22/">https://www.linkedin.com/in/anuragk22/</a>],
    // ["Resume", "bt22csd014@iiitn.ac.in"],
    ["MovieGig", <a href="https://moviegig.onrender.com/">https://moviegig.onrender.com/</a>],
    ["NewzSage", <a href="https://newz-sage.vercel.app">https://newz-sage.vercel.app</a>],
  ];

  return (
    <div className="mt-6 p-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-xl shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">
        💡 My Information
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white rounded-md shadow-sm overflow-hidden">
          <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <tr>
              {["📋 Field", "🔍 Details"].map((header, idx) => (
                <th
                  key={idx}
                  className="px-4 py-2 sm:px-6 sm:py-3 text-left font-semibold text-xs sm:text-sm md:text-base"
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
                <td className="px-4 py-2 sm:px-6 sm:py-3 text-gray-700 text-xs sm:text-sm md:text-base">
                  {field}
                </td>
                <td className="px-4 py-2 sm:px-6 sm:py-3 text-gray-700 text-xs sm:text-sm md:text-base">
                  {detail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileInfo;
