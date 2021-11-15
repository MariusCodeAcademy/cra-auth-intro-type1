import MyInput from './UI/MyInput';
import { useState } from 'react';
import { login } from '../utils/Fetch';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // validate
    console.log('Login');
    const loginRezult = await login(email, password);
    console.log('loginRezult', loginRezult);
    if (loginRezult.msg && loginRezult.msg === 'success') {
      const { email, token } = loginRezult.data;
      // TODO: make it work with context.api
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userToken', token);
      // TODO: redirect to home page
    }
  };

  return (
    <form onSubmit={handleLogin} className='w-50'>
      <MyInput
        value={email}
        setValue={setEmail}
        type='text'
        placeholder='your email'
      />
      <MyInput
        value={password}
        setValue={setPassword}
        type='password'
        placeholder='your Password'
      />
      <button className='btn btn-success'>Login</button>
    </form>
  );
}

export default LoginForm;
