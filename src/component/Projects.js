import React from "react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-gray-100 px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-4 rounded-md">
          My Projects
        </h2>
        <p className="mt-6 text-lg text-gray-600">
          I’m currently working on some exciting ideas! While I don’t have any
          completed projects to showcase just yet, stay tuned — I’ll be sharing
          them here soon.
        </p>
        <div className="mt-10">
          <svg
            className="mx-auto w-24 h-24 text-gray-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-gray-400 mt-4">No projects to display — yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
