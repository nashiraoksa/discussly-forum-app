import React, { useState } from 'react';
import ChevronDownIcon from '../../assets/ChevronDown';
import ButtonGeneral from '../general/ButtonGeneral';
import PropTypes from 'prop-types';

export default function UserProfile({ name, avatar, signOut }) {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled((prev) => !prev);
  };

  const handleLogout = () => {
    signOut();
    setToggled(false);
  };

  return (
    <div className='relative w-full flex justify-end items-center gap-2'>
      <div className='flex items-center gap-2 cursor-pointer' onClick={handleToggle}>
        {avatar ? (
          <img src={avatar} alt='avatar' className='w-7 h-7 rounded-full' />
        ) : (
          <div className='w-7 h-7 bg-slate-300 rounded-full'></div>
        )}
        <span className='text-white text-normal font-normal'>{name}</span>
        <ChevronDownIcon
          className={`w-4 h-4 text-white transform transition-transform duration-300 ${
            toggled ? '-rotate-180' : 'rotate-0'
          }`}
        />
      </div>
      {toggled && (
        <div className='absolute w-[150px] top-full px-4 py-2 bg-[#373F51] border-t shadow-md z-10'>
          <ButtonGeneral text='Sign Out' type='secondary' rounded='full' onClick={handleLogout} />
        </div>
      )}
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  signOut: PropTypes.func.isRequired,
};
