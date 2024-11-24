import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="bg-custom-pink w-full sm:h-[250px] md:h-[350px] lg:h-[640px] px-4 sm:px-8 lg:px-20 py-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start lg:items-start gap-4 sm:gap-6 lg:gap-8">
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2 h-[300px] text-center lg:text-left py-4 sm:py-8 lg:py-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-black mb-4 text-wrap">
              Find Your Dream Home
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-normal text-black mb-6">
              Explore our curated selection of exquisite properties meticulously
              tailored to your unique dream home vision.
            </p>
            <a
              href="#"
              className="bg-black text-nowrap text-custom-pink inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
            >
              Sign up
            </a>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[800px] flex justify-center lg:justify-end">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] ipad:h-[550px] ipad-landscape:h-[490px]">
              <Image
                src="/hero.png"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div
          className="w-full sm:w-[600px] md:w-[750px] lg:w-[950px] bg-color-2 flex 
          flex-col sm:flex-row justify-center gap-4 sm:gap-7 mx-auto text-center py-10 md:py-16
           lg:py-20 px-4 md:px-6 lg:px-8 rounded-lg " 
        >
          <div>
            <input type="text" className="w-full sm:w-auto px-4 md:px-6 py-2 font-medium rounded-lg" />
          </div>
          <div>
            <input type="text" className="w-full sm:w-auto px-4 md:px-6 py-2 font-medium rounded-lg" />
          </div>
          <div>
            <input type="text" className="w-full sm:w-auto px-4 md:px-6 py-2 font-medium rounded-lg" />
          </div>
          <div>
            <button className="bg-black text-white w-full sm:w-auto px-4 md:px-6 py-2 font-medium text-nowrap rounded-lg">
              Sign up
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
