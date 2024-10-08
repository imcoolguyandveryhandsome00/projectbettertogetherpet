import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Foundation from './pages/Foundation';
import Volunteer from './pages/Volunteer';
import Rescued from './pages/Rescued';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Login from './front/login';
import Profileuser from './front/profileuser';
import Foundation1 from './pages/Foundation1';
import Signup from './front/signupUser';
import Signupvolunteer from './front/signupVolunteer';
import Profileuseredit from './front/profileuseredit';
import Chat from './pagess/chat';
import Status from './pagess/status';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Login />} />
        <Route path="/Home" element={< Home />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/rescued" element={<Rescued />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/foundation1" element={<Foundation1 />} />
        <Route path="/profileuser" element={<Profileuser />} />
        <Route path="/profileuseredit" element={<Profileuseredit />} />
        <Route path="/signupuser" element={<Signup />} />
        <Route path="/signupvolunteer" element={<Signupvolunteer />} />
        <Route path="/chat" element={< Chat />} />
        <Route path="/status" element={< Status/>} />
      </Routes>
    </Router>
  );
}

export default App;
