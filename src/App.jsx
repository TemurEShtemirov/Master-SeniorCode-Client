import React from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './pages/NoPage/NoPage';
import Home from './pages/home/Home';
import Layout from './layout/layout';
import Blogs from './pages/blogs/blogs';
import Contact from './pages/Contact/contact';
import About from './pages/about/about';
import AllInstructors from './pages/All_Instructors/Allinstructors';
import AllCourses from './pages/allCourses/AllCourses';
import CourseDetails from './pages/courseDetails/courseDetails';
import InstructorsDetails from './pages/InstructorsDetails/InstructorsDetails';
import EventsDetails from './pages/eventsDetails/eventsDetails';
import BlogDetails from './pages/blogDetails/blogDetails';
import StudentsReg from './pages/StudentsReg/StudentsReg';
import StudentLogin from './pages/StudentLogin/StudentLogin';
import Event from './pages/events/event';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/instructors' element={<AllInstructors />} />
            <Route path='/instructor:id' element={<InstructorsDetails />} />
            <Route path='/courses' element={<AllCourses />} />
            <Route path='/course:id' element={<CourseDetails />} />
            <Route path='/events' element={<Event />} />
            <Route path='/event:id' element={<EventsDetails />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path='/blog:id' element={<BlogDetails />} />
            <Route path='/student/reg' element={<StudentsReg />} />
            <Route path='/student/login' element={<StudentLogin />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
