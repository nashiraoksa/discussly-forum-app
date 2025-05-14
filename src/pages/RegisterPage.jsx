import React from 'react';
import CardGeneral from '../components/general/CardGeneral';
import RegisterInput from '../components/register/RegisterInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/login');
  };

  return (
    <div className='w-full h-full py-12 px-96 flex flex-col justify-start items-center'>
      <CardGeneral>
        <h2 className='text-2xl text-[#373F51] font-bold'>Register</h2>
        <RegisterInput register={onRegister} />
      </CardGeneral>
    </div>
  );
}
