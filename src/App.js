// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/nav/nav';
import Main from './pages/Main/Main';
import Sign from './pages/Sign/Sign';
import AllCourses from './pages/Learn/AllCourses';
import Profile from './pages/Profile/Profile';
import MyCourses from './pages/MyCourses/MyCourses';
import CourseDetail from './pages/CourseDetail/CourseDetail';
import MyStudents from './pages/MyStudents/MyStudents';

const App = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);

  return (
    <Router>
      <div className="main-container">
        <NavBar 
          isSignIn={isSignIn} 
          setIsSignIn={setIsSignIn} 
          isTeacher={isTeacher}
        />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/learn" element={<AllCourses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route 
            path="/sign-in" 
            element={<Sign 
              setIsSignIn={setIsSignIn} 
              setIsTeacher={setIsTeacher}
            />} 
          />
          <Route path="/profile" element={<Profile isTeacher={isTeacher}/> } />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/my-students" element={<MyStudents />} />          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
