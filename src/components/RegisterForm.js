import { useState } from 'react';
import MyInput from './UI/MyInput';

const backUrl = 'http://localhost:5000';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (!email) {
      return setErrors([
        ...errors,
        { field: 'email', errorMsg: 'Please enter email' },
      ]);
    }
    if (!password) {
      return setErrors([
        ...errors,
        { field: 'password', errorMsg: 'Please enter password' },
      ]);
    }
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
    if (data.error) {
      setErrors(data.error);
    }
  };

  function findErrorByField(field) {
    // find erro by field
    const foundErrObj = errors.find((errObj) => errObj.field === field);
    return foundErrObj ? foundErrObj.errorMsg : null;
  }

  return (
    <form onSubmit={handleSubmit} className='w-50'>
      <MyInput
        value={email}
        setValue={setEmail}
        type='text'
        placeholder='Enter email'
        error={findErrorByField('email')}
      />
      <MyInput
        value={password}
        setValue={setPassword}
        type='password'
        placeholder='Create password'
        error={findErrorByField('password')}
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
