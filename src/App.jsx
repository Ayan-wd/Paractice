import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import About from "./components/About";
import Faculty from "./components/Faculty";
import Services from "./components/Services";
import Support from "./components/Support";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Founder from "./components/Founder";
import DetailedServices from "./components/DetailedPages/DetailedServices";
import DetailedFaculty from "./components/DetailedPages/DetailedFaculty";
import Preloader from "./components/preloader";
import DetailedAbout from "./components/DetailedPages/DetailedAbout";
// import Signup from "./components/Signup";
import Login from "./components/Login";
import Parentform from "./SignupForm/Parentform";
import StudentForm from "./SignupForm/StudentForm";
import Teacherform from "./SignupForm/Teacherform";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HomePage />
        <Services />
        <Faculty />
        <About />
        {/* <Support /> */}
        <Footer />
      </>
    ),
  },
  {
    path: "/services",
    element: (
      <>
        <Navbar />
        <DetailedServices />
        <Footer />
      </>
    ),
  },
  {
    path: "/faculty",
    element: (
      <>
        <Navbar />
        <DetailedFaculty />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Navbar />
        <Support />
        <Footer />
      </>
    ),
  },
  // {
  //   path: "/founder",
  //   element: (
  //     <>
  //       <Navbar />
  //       <Founder />
  //       <Footer />
  //     </>
  //   ),
  // },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/detailedAbout",
    element: (
      <>
        <Navbar />
        <DetailedAbout />
        <Footer />
      </>
    ),
  },
  {
    path: "/parentsignupform",
    element: (
      <>
        <Navbar />
        <Parentform />
        <Footer />
      </>
    ),
  },
  {
    path: "/studentsignupform",
    element: (
      <>
        <Navbar />
        <StudentForm />
        <Footer />
      </>
    ),
  },
  {
    path: "/teachersignupform",
    element: (
      <>
        <Navbar />
        <Teacherform />
        <Footer />
      </>
    ),
  },
  {
    path: "/Login",
    element: (
      <>
        <Navbar />
        <Login/>
        <Footer />
      </>
    ),
  },
]);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Preloader /> : <RouterProvider router={router} />}</>;
}

export default App;
