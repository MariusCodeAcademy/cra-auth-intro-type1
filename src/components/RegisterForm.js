import { useState } from 'react';
import MyInput from './UI/MyInput';

function RegisterForm() {
  const [email, setEmail] = useState('');

  return (
    <form className='w-50'>
      <MyInput
        value={email}
        setValue={setEmail}
        type='text'
        placeholder='Enter email'
      />
      <MyInput type='password' placeholder='Create password' />
      <MyInput type='password' placeholder='Repeat password' />
      <button className='btn btn-primary'>Create</button>
    </form>
  );
}

export default RegisterForm;
