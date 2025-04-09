import React from 'react';
import CardGeneral from '../components/general/CardGeneral';
import LoginInput from '../components/login/LoginInput';

export default function LoginPage() {
  const onLogin = ({ email, password }) => {
    console.log('login', email, password);
  };

  return (
    <div className='w-full h-full py-12 px-96 flex flex-col justify-start items-center'>
      <CardGeneral>
        <h2 className='text-2xl text-[#373F51] font-bold'>Login</h2>
        <LoginInput login={onLogin} />
      </CardGeneral>
    </div>
  );
}
