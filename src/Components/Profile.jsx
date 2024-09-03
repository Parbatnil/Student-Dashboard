// src/Components/Profile.jsx
import React from "react";

const Profile = ({ user }) => {
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <h1 className="text-2xl font-bold m-14">Hi! {user.name}</h1>

      <div className="flex pb-10">
        <img
          src={user.photoUrl}
          alt={user.name}
          className="h-64 rounded-[9999px]"
        />
        <div className="space-y-8 space-x-4">
          <p>...</p>
          <h3 className="text-xl">{user.name}</h3>
          <h3 className="text-xl">{user.age} years old</h3>
          <h3 className="text-sm">Student of {user.courseenrolled}</h3>
        </div>
      </div>
      <table className="min-w-full border-collapse my-2">
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-semibold">Name:</td>
            <td className="border px-4 py-2">{user.name}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Roll No:</td>
            <td className="border px-4 py-2">{user.rollNo}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Guardian Name:</td>
            <td className="border px-4 py-2">{user.guardianName}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">
              Course Start Date:
            </td>
            <td className="border px-4 py-2">{user.courseStartDate}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Course End Date:</td>
            <td className="border px-4 py-2">{user.courseEndDate}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Email ID:</td>
            <td className="border px-4 py-2">{user.email}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Date Of Birth:</td>
            <td className="border px-4 py-2">{user.dob}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-semibold">Phone Number:</td>
            <td className="border px-4 py-2">{user.phoneNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
