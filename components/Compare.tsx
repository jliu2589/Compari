import React from "react";

export default function Compare() {
  return (
    <div>
      <div className="w-6/12 mx-auto p-4 border border-gray-100 rounded drop-shadow-md">
        <div className="text-center flex flex-row justify-evenly">
          <div className="w-20 h-20 mr-2 bg-red-500 hover:bg-red-400 rounded drop-shadow-md">
            A
          </div>
          <div className="w-20 h-20 mr-2 bg-blue-500 hover:bg-blue-400 rounded drop-shadow-md">
            B
          </div>
        </div>
        <div className="p-3">
          <h2>Results </h2>
          <ul>
            <li>A</li>
            <li>B</li>
          </ul>
        </div>
      </div>
    </div>
  );
}