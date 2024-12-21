import React from "react";

const data = {
  technologies: [
    { name: "Flutter", color: "text-blue-500" },
    { name: "Dart", color: "text-blue-400" },
    { name: "Firebase", color: "text-yellow-500" },
    { name: "SQLite", color: "text-gray-500" },
    { name: "Hive", color: "text-blue-300" },
    { name: "Rest API", color: "text-green-500" },
    { name: "Android", color: "text-green-400" },
    { name: "Kotlin", color: "text-orange-500" },
    { name: "HTML", color: "text-red-500" },
    { name: "CSS", color: "text-blue-600" },
    { name: "JavaScript", color: "text-yellow-400" },
  ],
  stateManagement: [
    { name: "BLoC", color: "text-blue-500" },
    { name: "Provider", color: "text-green-500" },
    { name: "GetX", color: "text-purple-500" },
    { name: "RiverPod", color: "text-blue-400" },
  ],
};

const Badge = ({ name, color }) => (
  <div
    className={`flex items-center justify-center px-4 py-2 border border-gray-700 rounded-md ${color}`}
  >
    {name}
  </div>
);

const TechnologiesPage = () => {
  return (
    <>
    <div>
    <div className="bg-black text-white min-h-screen p-8">
      {/* Technologies Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technologies</h2>
        <div className="flex flex-wrap gap-4">
          {data.technologies.map((tech) => (
            <Badge key={tech.name} name={tech.name} color={tech.color} />
          ))}
        </div>
      </section>

      {/* State Management Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">State Management</h2>
        <div className="flex flex-wrap gap-4">
          {data.stateManagement.map((state) => (
            <Badge key={state.name} name={state.name} color={state.color} />
          ))}
        </div>
      </section>
    </div>
    </div>
    
    </>
    
  );
};

export default TechnologiesPage;
