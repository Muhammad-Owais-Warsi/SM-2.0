import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBook, faChalkboardTeacher, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { UserButton } from '@clerk/clerk-react';





function CreateClass() {
    const [classCode, setClassCode] = useState('Nitin Dixit'); // Default code
    const [className, setClassName] = useState('');
    const [subjectInfo, setSubjectInfo] = useState('');

    // Function to copy the code to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(classCode);
    };

    // Function to generate a random code
    const generateRandomCode = () => {
        const randomCode = Math.random().toString(36).substr(2, 8).toUpperCase(); // Generates a random 8-character code
        setClassCode(randomCode);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-black">
            <UserButton/ >
            {/* Create A Class Header */}
            <h1 className="text-white text-4xl font-bold mb-12 text-center">Create A Class</h1>

            {/* Input Fields */}
            <div className="w-full max-w-lg space-y-8">
                {/* Class Name Input with Icon on the Left */}
                <div className="relative">
                    <FontAwesomeIcon 
                        icon={faChalkboardTeacher} 
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                    <input
                        type="text"
                        className="w-full py-3 pl-12 pr-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Class Name"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                    />
                </div>

                {/* Subject Information Input with Icon on the Left */}
                <div className="relative">
                    <FontAwesomeIcon 
                        icon={faBook} 
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                    />
                    <input
                        type="text"
                        className="w-full py-3 pl-12 pr-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter Subject Information"
                        value={subjectInfo}
                        onChange={(e) => setSubjectInfo(e.target.value)}
                    />
                </div>
            </div>

            {/* Generate Random Code Button */}
            <button
                className="w-full max-w-lg py-3 mt-20 bg-indigo-500 text-white font-semibold rounded-md hover:bg-purple-600 transition-colors mb-4"
                onClick={generateRandomCode}
            >
                Generate Random Code
            </button>

            {/* Class Code Display with Copy Button and Icon */}
            <div className="w-full max-w-lg mt-10 mb-10">
                <div className="relative w-full">
                    <button
                        className="w-full py-4 bg-blue-500 text-white font-semibold rounded-md text-left pl-4 pr-20"
                    >
                        {classCode}
                    </button>
                    <button
                        className="absolute top-0 right-0 h-full px-4 bg-gray-300 text-black font-semibold rounded-r-md hover:bg-gray-400 transition-colors flex items-center"
                        onClick={copyToClipboard}
                    >
                        Copy
                        <FontAwesomeIcon 
                            icon={faClipboard} 
                            className="ml-2.5 text-black"
                        />
                    </button>
                </div>
            </div>

            {/* Go back to dashboard link */}
            <a href="#" className="mt-6 text-blue-500 hover:underline">
                Go back to Dashboard <FontAwesomeIcon icon={faArrowRight} /> 
            </a>
        </div>
    );
}

export default CreateClass;
