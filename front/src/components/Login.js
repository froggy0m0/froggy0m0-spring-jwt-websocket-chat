import React, { useState } from 'react';

function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // 여기에서 id와 password를 사용하여 로그인 로직을 수행하실 수 있습니다.
    console.log(`Logging in with ID: ${id}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아이디:
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
      </label>
      <label>
        비밀번호:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="로그인" />
    </form>
  );
}

export default LoginForm;
