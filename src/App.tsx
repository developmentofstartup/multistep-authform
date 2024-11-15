import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import AuthForm from './components/AuthForm/AuthForm';
import Home from './components/Home/Home';
const App: React.FC = () => {
  return (
    <div className='main'>
      <Router>
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
