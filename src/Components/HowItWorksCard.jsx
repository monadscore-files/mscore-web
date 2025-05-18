import React from 'react';

const HowItWorksCard = ({ imageSrc, title, description }) => {
  return (
    <div className="rounded-2xl p-6 shadow-md text-center w-full max-w-sm mx-auto bg-gradient-to-b from-white/10 to-black/10">
      <img
        src={imageSrc}
        alt={title}
        className="w-20 h-20 mx-auto mb-4 object-contain"
      />
      <p className="text-sm text-gray-300 ">{title}</p>
      <p className="text-[10px]  text-justify py-2 text-gray-300 opacity-65  ">{description}</p>
    </div>
  ); 
};

export default HowItWorksCard;