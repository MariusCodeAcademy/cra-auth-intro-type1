import { useState } from 'react';
import MyInput from './UI/MyInput';

const backUrl = 'http://localhost:5000';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return console.log('no email');
    }
    if (!password) return console.log('no password');
    if (password.length <= 4) return console.log('Password must be 4 or more');
    if (password !== repeatPassword) return console.log('pass must match');
    console.log('sending form no errors');
    const resp = await fetch(`${backUrl}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await resp.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className='w-50'>
      <MyInput
        value={email}
        setValue={setEmail}
        type='text'
        placeholder='Enter email'
      />
      <MyInput
        value={password}
        setValue={setPassword}
        type='password'
        placeholder='Create password'
      />
      <MyInput
        value={repeatPassword}
        setValue={setRepeatPassword}
        type='password'
        placeholder='Repeat password'
      />
      <button type='submit' className='btn btn-primary'>
        Create
      </button>
    </form>
  );
}

export default RegisterForm;
