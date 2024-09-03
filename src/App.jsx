import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Profile from "./Components/Profile";
import Courses from "./Components/Courses";
import Login from "./Components/Login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (data) => {
    setIsAuthenticated(true);
    setUserData(data);
  };

  return (
    <Router>
      <div className="flex flex-col md:flex-row">
        {isAuthenticated && (
          <div className="w-full md:w-64 h-auto md:h-auto md:min-h-screen p-4 bg-gray-200">
            <h2 className="text-2xl font-bold mb-4">Student Dashboard</h2>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-blue-500 hover:text-blue-700">
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Courses
                </Link>
              </li>
            </ul>
          </div>
        )}

        <div className="flex-1 p-8">
          <Routes>
            {!isAuthenticated ? (
              <Route path="*" element={<Login onLogin={handleLogin} />} />
            ) : (
              <>
                <Route path="/" element={<Profile user={userData} />} />
                <Route path="/courses" element={<Courses user={userData} />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
