import { ArrowCircleDownIcon } from '@heroicons/react/outline';
import React from 'react';

const Hero = ({ heading, message, headingSecond }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-0 bg-fixed bg-center bg-cover font-raleway bg-minimalist">
      {/* overlay */}
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-rose-700/70 z-[2]" />
      {/* overlay */}
      <div className="p-5 text-white z-[2]  mt-[10rem]">
        <h2 className="text-5xl font-bold cursor-pointer">{heading}</h2>
        <h3 className="text-2xl  cursor-pointer  font-extralight font-lobster ml-[12rem]">
          {headingSecond}
        </h3>

        <div className="flex flex-col justify-center items-center">
          <p className="py-5 text-lg">{message}</p>
          <ArrowCircleDownIcon className="h-10 w-10 animate-pulse cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
