import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faPersonMilitaryToPerson, faBrain, faLightbulb} from '@fortawesome/free-solid-svg-icons';
import {SignIn} from "@clerk/clerk-react"

function Login() {
  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Section with the dark background and sphere animation */}
        <section className="relative flex h-32 items-end bg-[#0B0A0C] lg:col-span-5 lg:h-full xl:col-span-6 lg:flex lg:flex-col lg:justify-center lg:items-center lg:space-y-4">
          
          <img 
            src='/sphere1.gif' 
            alt="Sphere Animation"
            className="absolute top-0 left-1/2 lg:w-48 lg:h-48 object-cover -translate-x-1/2 lg:mt-2 z-20 w-12 h-12 mt-0" 
          />

          <img
            alt=""
            src="/login.jpg"
            className="absolute lg:mt-0 sm:mt-0 inset-0 h-full w-full object-contain opacity-80"
          />

          {/* Content for large screens */}
          <div className="absolute inset-0 hidden lg:flex flex-col items-center justify-center text-center space-y-4 lg:space-y-6">
            <h2 className="text-white text-5xl italic font-handjet tracking-wider mb-8 lg:mb-16">
              Teach, Learn, Anywhere
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <p className="text-white text-lg font-fjalla px-4 py-2 rounded shadow-md flex items-center gap-2">
                <FontAwesomeIcon icon={faLaptop} /> Your Digital Classroom Hub
              </p>
              <p className="text-white text-lg font-fjalla px-4 py-2 rounded shadow-md flex items-center gap-2">
                <FontAwesomeIcon icon={faPersonMilitaryToPerson} /> Classrooms Without Limits
              </p>
              <p className="text-white text-lg font-fjalla px-4 py-2 rounded shadow-md">
              <FontAwesomeIcon icon={faBrain} /> Connecting Minds Virtually
              </p>
              <p className="text-white text-lg font-fjalla px-4 py-2 rounded shadow-md">
              <FontAwesomeIcon icon={faLightbulb} /> Beyond Traditional Walls
              </p>
            </div>  
          </div>
        </section>

        {/* White background section for small screens */}
        <section className="lg:hidden bg-white p-8 flex flex-col items-center text-center">
          <h2 className="text-black text-3xl italic font-handjet tracking-wider mb-8">
            Teach, Learn, Anywhere
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <p className="text-black text-lg font-fjalla px-4 py-2 rounded flex items-center gap-2">
              <FontAwesomeIcon icon={faLaptop} /> Your Digital Classroom Hub
            </p>
            <p className="text-black text-lg font-fjalla px-4 py-2 rounded flex items-center gap-2">
              <FontAwesomeIcon icon={faPersonMilitaryToPerson} /> Classrooms Without Limits
            </p>
            <p className="text-black text-lg font-fjalla px-4 py-2 rounded ">
            <FontAwesomeIcon icon={faBrain} /> Connecting Minds Virtually
            </p>
            <p className="text-black text-lg font-fjalla px-4 py-2 rounded ">
            <FontAwesomeIcon icon={faLightbulb} /> Beyond Traditional Walls
            </p>
          </div>
        </section>

        <main
          className="flex flex-col items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 w-full"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20 dark:bg-gray-900"
                href="#"
              >
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG Content */}
                </svg>
              </a>

              
            </div>

            {/* Form Centering */}
            <div className="flex justify-center items-center mt-8">
              <SignIn />
            </div>
          </div>
        </main>
      </div>
    </section>

  );
}

export default Login;
