import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';

import Home from './components/Home'; // 'Home' 컴포넌트가 정의된 파일 경로
import Login from './components/Login';
import SignupForm from './components/SignupForm'; // 'Login' 컴포넌트가 정의된 파일 경로

axios.defaults.baseURL="http://localhost:8080"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupform" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;