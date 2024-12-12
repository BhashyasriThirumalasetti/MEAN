import React from 'react';
import Login from "./Pages/login_signup/Login.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/login_signup/Signup.jsx';
import Homepage from "./Pages/Homepage/Homepage.jsx";
import "./App.css"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
