import React from "react";

const StepsToStart = ({ imageSrc, title, description }) => {
  return (
    <div className="flex items-end gap-2 p-2 shadow-md justify-center ">
      <h3 className="text-8xl mb-2 text-white font-bold w-36 text-outline">
        {title}
      </h3>
      <div>
        <img
          src={imageSrc}
          alt={title}
          className="w-16 h-16 mb-4 object-contain"
        />
        <h3 className="text-lg mb-2 text-white text-left w-36">
          {description}
        </h3>
      </div>
    </div>
  );
};

export default StepsToStart;