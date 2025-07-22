import React from "react";
import { Link } from "react-router-dom";
import { Server } from 'lucide-react';

const NotFound = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col justify-center items-center min-h-[70vh] text-center">
          <div className="inline-block mb-6 bg-gradient-to-r from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-full p-1 backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center space-x-2 px-4 py-2">
              <Server size={24} className="text-blue-400" />
              <span className="text-gray-300 font-medium text-lg">Page Not Found</span>
            </div>
          </div>

          <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
            404
          </h1>

          <h2 className="text-3xl font-semibold text-gray-300 mb-4">
            Oops! The page you're looking for doesn't exist.
          </h2>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto font-medium">
            It seems you’ve hit a dead end. Maybe you can return to the homepage and start over?
          </p>

          <Link
            to="/"
            className="text-lg text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out px-8 py-3 rounded-full shadow-lg hover:shadow-xl"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
