import React from "react";

const WhyScale = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#03193D] justify-center items-center">
      {/* First white box/card */}
      <div className="w-72  bg-white rounded-xl shadow-lg p-4 m-4">
        <h2 className="text-lg font-bold text-gray-800">Box 1</h2>
        <p className="text-sm text-gray-600">Description of box 1</p>
      </div>

      {/* Second white box/card */}
      <div className="w-72 md:w-96 bg-white rounded-xl shadow-lg p-4 m-4">
        <h2 className="text-lg font-bold text-gray-800">Box 2</h2>
        <p className="text-sm text-gray-600">Description of box 2</p>
      </div>

      {/* Third white box/card */}
      <div className="w-72 md:w-96 bg-white rounded-xl shadow-lg p-4 m-4">
        <h2 className="text-lg font-bold text-gray-800">Box 3</h2>
        <p className="text-sm text-gray-600">Description of box 3</p>
      </div>
    </div>
  );
};

export default WhyScale;
