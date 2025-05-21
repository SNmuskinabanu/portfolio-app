import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-gray-100 px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 to-purple-600 text-white text-center py-4 rounded-md">
          Contact Me
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Feel free to reach out using the form below.
        </p>

        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              placeholder="Write your message..."
              className="w-full px-4 py-3 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
