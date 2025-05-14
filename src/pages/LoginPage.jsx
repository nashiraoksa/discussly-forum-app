import React from 'react';
import CardGeneral from '../components/general/CardGeneral';
import LoginInput from '../components/login/LoginInput';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../states/authUser/action';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    console.log('login', email, password);
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  return (
    <div className='w-full h-full py-12 px-96 flex flex-col justify-start items-center'>
      <CardGeneral>
        <h2 className='text-2xl text-[#373F51] font-bold'>Login DiscussLy</h2>
        <LoginInput login={onLogin} />
      </CardGeneral>
    </div>
  );
}
