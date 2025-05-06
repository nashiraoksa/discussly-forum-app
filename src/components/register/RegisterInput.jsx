import React, { useState } from 'react';
import InputGeneral from '../general/InputGeneral';
import ButtonGeneral from '../general/ButtonGeneral';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useInput from '../../hooks/useInput';

export default function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <form action='' className='w-full h-[60vh] flex flex-col gap-6'>
      <div className='flex flex-col gap-4'>
        <InputGeneral type='Text' placeholder='Name' value={name} onChange={onNameChange} />
        <InputGeneral type='email' placeholder='Email' value={email} onChange={onEmailChange} />
        <div className='relative'>
          <InputGeneral
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={onPasswordChange}
          />
          <button
            type='button'
            className='absolute z-10 right-4 top-[10px]'
            onClick={toggleShowPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
      <div>
        <ButtonGeneral
          type='primary'
          text='Register'
          onClick={() => register({ name, email, password })}
        />
        <div className='mt-1 flex text-sm gap-1 text-[#373F51]'>
          <p>Already have an account?</p>
          <Link to='/login' className='underline font-medium'>
            Login here.
          </Link>
        </div>
      </div>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
