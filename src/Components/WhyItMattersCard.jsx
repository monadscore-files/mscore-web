import React from 'react';

const WhyItMattersCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex items-center gap-6 p-6 shadow-md w-full max-w-3xl mx-auto border border-white">
      <img
        src={imageSrc}
        alt={title}
        className="w-12 h-12 object-contain"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default WhyItMattersCard;