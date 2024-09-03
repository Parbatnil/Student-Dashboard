// src/components/Courses.jsx
import React from "react";
import { degreeDetails, courseDetails } from "../data/user"; // Correctly importing both

const Courses = ({ user }) => {
  if (!user) {
    return <p>Loading...</p>;
  }

  // Dynamically get the correct degree details based on the user's enrolled course
  const degreeInfo = degreeDetails[0][user.coursecode];
  // Get the correct exam preparation details based on the user's exam type
  const examInfo = courseDetails[0][user.exam];

  return (
    <div>
      <div>
        <h2 className="text-2xl mb-9 mx-2">Degree</h2>
        <div className="bg-slate-300 p-4">
          <h5 className="font-bold">{user.courseenrolled.toUpperCase()}</h5>
          <p className="my-9">{degreeInfo}</p>{" "}
          {/* Display the dynamic degree information */}
          <button className="bg-blue-500 my-3 px-4 py-2 rounded-md text-white hover:bg-blue-800">
            Goto Course
          </button>
        </div>
      </div>

      {examInfo && ( // Check if there's information for the exam
        <div className="py-4">
          <h2 className="text-2xl mb-9 mx-2 py-6">Exam Preparation</h2>
          <div className="bg-slate-300 p-4">
            <h5 className="font-bold">{user.exam.toUpperCase()}</h5>
            <p className="my-9">{examInfo}</p>
            <button className="bg-blue-500 my-3 px-4 py-2 rounded-md text-white hover:bg-blue-800">
              Goto Exam Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
