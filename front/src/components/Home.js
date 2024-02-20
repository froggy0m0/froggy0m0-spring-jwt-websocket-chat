import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>홈 페이지</h1>
      <Link to="/login">로그인</Link> <br></br>
      <Link to="/signupform">회원가입</Link>
      
    </div>
  );
}

export default Home;
