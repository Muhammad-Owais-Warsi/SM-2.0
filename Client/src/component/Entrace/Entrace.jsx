// src/SplitPage.js
import React from "react";
import { Button } from "@nextui-org/react";
import { UserIcon } from "../../Icons/Usericon";
import { Protect, useAuth, useUser} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function SplitPage() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  if (!isSignedIn) {
    navigate("/login");
  }
  const { user } = useUser();
  if(user) {
    var fullname = user.fullName;
    var email = user.primaryEmailAddress.emailAddress;
    
  }

  const Student = () => {
    axios.post("/http:localhost:3000/studentSignUp/", {
      name: fullname,
      email: email,
      role: "student"
    })
  }
  
  const Teacher = () => {
    axios.post("/http:localhost:3000/teacherSignUp/", {
      name: fullname,
      email: email,
      role: "teacher"
    })
  }

  return (
    <div className="flex h-screen">
      {/* Yellow Half */}
      <Protect>
      <div className="w-1/2 bg-yellow-500 flex items-center justify-center">
        <Button
          color="danger"
          variant="bordered"
          className="relative text-4xl w-full h-full flex flex-col items-center justify-center border-none"
          css={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        >
          <img
            src="./person.webp"
            alt="Student Icon"
            className="h-2/3 w-auto mb-4"
          />
          <span className="text-4xl font-bold text-black">Student</span>
        </Button>
      </div>

      {/* Green Half */}
      <div className="w-1/2 bg-green-500 flex items-center justify-center">
        <Button
          color="danger"
          variant="bordered"
          className="relative text-4xl w-full h-full flex flex-col items-center justify-center border-none"
          css={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        >
          <img
            src="./person.webp"
            alt="Teacher Icon"
            className="h-2/3 w-auto mb-4"
          />
          <span className="text-4xl font-bold text-black">Teacher</span>
        </Button>
      </div>
    </Protect>
    </div>
  );
}

export default SplitPage;
