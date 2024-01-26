import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Subject from './Subject/Subject';
import Korean from './Exams/Korean/exam'

function App() {
  return(
    <Router>
        <Routes>
          <Route path="/subjects" element={<Subject/>}/>
          <Route path="/subjects/korean" element={<Korean/>}/>
        </Routes>
    </Router>
  );
}


export default App;