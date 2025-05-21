import React from "react";

const Skill = () => {
  const skillsData = {
    technical: [
      { name: "Javascript" },
      { name: "Java" },
      { name: "SQL" },
      { name: "Html" },
      { name: "Python" },
    ],
    soft: [
      { name: "Communication", level: "Expert", percentage: 90 },
      { name: "Leadership", level: "Intermediate", percentage: 75 },
      { name: "Problem-solving", level: "Intermediate", percentage: 70 },
      { name: "Creativity", level: "Intermediate", percentage: 65 },
    ],
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-white-to-gray-600 px-4 py-8">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 to-purple-600 text-white text-center py-4 rounded-md">
          My Skills
        </h2>
        <p className="mt-4 text-xl text-gray-600 text-center">
          A comprehensive overview of my expertise and professional capabilities
        </p>

        {/* Technical Skills */}
        <h3 className="mt-10 text-2xl font-semibold text-indigo-700">
          Technical Expertise
        </h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.technical.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h4 className="text-xl font-semibold text-gray-800">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <h3 className="mt-10 text-2xl font-semibold text-purple-700">
          Personal Attributes
        </h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.soft.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h4 className="text-xl font-semibold text-gray-800">
                {skill.name}
              </h4>
              <p className="text-gray-600 mt-2">{skill.level}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1 text-right">
                {skill.percentage}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
