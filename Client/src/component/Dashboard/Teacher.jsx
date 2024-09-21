import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Teacher() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const id = queryParams.get("id");
  console.log(id)

  const [data, setData] = useState({});
  
  useEffect(() => {
    axios.post("http://localhost:3000/teacher/auth/", {
      id : id
    }).then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  }, [])
  return (
    <>
    { data ? (<div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      
      {/* Container for alignment */}
      <div className="w-full max-w-4xl">
        
        {/* Welcome Section */}
        <div className="w-full p-4 text-center bg-white border-b border-gray-300 rounded-md shadow-md">
          <h1 className="text-xl font-bold">Welcome {Teacher}</h1> {/* Student name dynamically inserted */}
        </div>
        
        {/* Statistics & Schedule Section */}
        <div className="w-full p-60 text-center bg-white border border-gray-300 rounded-md shadow-md mt-4">
          <p className="text-lg font-medium">Current Statistics & Schedule, and test</p>
        </div>

        {/* Button Grid with Different Colors */}
        <div className="w-full grid grid-cols-2 gap-4 mt-4">
          <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600">
            Join Class
          </button>
          <button className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600">
            Join Classroom
          </button>
          <button className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600">
            Leave Class
          </button>
          <button className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600">
            Complaints
          </button>
        </div>

      </div>

      {/* Back to login link */}
      <a href="#" className="block mt-8 text-sm text-center text-blue-500">
        Back to login
      </a>
    </div>) : (<div>Loading...</div>) }
    </>
  );
}

export default Teacher;
