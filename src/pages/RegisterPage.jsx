import React from 'react';
import CardGeneral from '../components/general/CardGeneral';
import RegisterInput from '../components/register/RegisterInput';
export default function LoginPage() {
  const onRegister = ({ name, email, password }) => {
    console.log('register', name, email, password);
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
