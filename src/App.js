import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/layout/Home';
import Resume from './components/resume/Resume';
import ProjectDetail from './components/projects/ProjectDetail'; // ✅ add this

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        {/* ✅ new dynamic route for project details */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
