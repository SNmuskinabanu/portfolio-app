import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-4">
          Hi I'm MuskinaBanu
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Hello! I'm a dedicated Computer Science student passionate about
          software development, especially in web technologies. I'm constantly
          learning and love turning ideas into reality through code.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              Education
            </h3>
            <p className="text-gray-600">
              Currently pursuing B.Tech in Computer Science at Srinivasa
              Ramanujan Institute of Technology. Actively involved in coding
              clubs and hackathons.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-teal-600 mb-2">
              Interests
            </h3>
            <p className="text-gray-600">
              Passionate about Web Development, Open Source, and UI/UX design.
              Always curious about building accessible and user-friendly
              interfaces.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Skills
            </h3>
            <p className="text-gray-600">
              HTML, CSS, JavaScript, React, Node.js, Git, Tailwind CSS. Eager to
              learn backend frameworks and DevOps tools.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-600 mb-2">Goals</h3>
            <p className="text-gray-600">
              To grow as a full-stack developer and contribute to real-world
              projects and open-source communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
