import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    axios.post('/user/signup', formData)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error(error)
        });

    console.log(`Signing up with Email: ${email}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이메일:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        비밀번호:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="회원 가입" />
    </form>
  );
}

export default SignupForm;
