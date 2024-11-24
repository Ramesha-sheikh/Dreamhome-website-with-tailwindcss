import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-red-50 w-full h-auto mt-11 py-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        
        {/* Image Section */}
        <div className="flex items-center justify-center w-full lg:w-[700px] xl:w-[700px] h-auto lg:h-[450px] xl:h-[500px] mb-10 lg:mb-0">
          <Image
            src="/product.png"
            alt="Product Image"
            className="max-w-[450px] h-[400px]"
            width={650}
            height={650}
          />
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 w-full lg:w-[650px] xl:w-[760px] h-auto lg:h-[450px] xl:h-[500px] justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-normal font-Montserrat text-center lg:text-left">
            We Help You To Find Your Dream Home
          </h2>
          <p className="mt-4 sm:mt-5 md:mt-7 lg:mt-9 font-normal font-Montserrat text-center lg:text-left">
            From cozy cottages to luxurious estates, our dedicated team guides
            you through every step of the journey, ensuring your dream home
            becomes a reality.
          </p>
          
          {/* Statistics Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 lg:gap-14 xl:gap-20 mt-6 sm:mt-8 md:mt-10 lg:mt-11">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">8K+</h1>
              <p className="text-xs sm:text-sm font-Montserrat font-bold text-nowrap">Houses Available</p>
            </div>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">6K+</h1>
              <p className="text-xs sm:text-sm font-Montserrat font-bold text-nowrap">House Sold</p>
            </div>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">2K+</h1>
              <p className="text-xs sm:text-sm font-Montserrat font-bold text-nowrap">Trusted Agents</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
