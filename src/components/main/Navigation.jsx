import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonGeneral from '../general/ButtonGeneral';
import UserProfile from './UserProfile';
import DiscusslyLogo from '../../assets/DiscusslyLogo.svg';

export default function Navigation({ authUser, signOut }) {
  const { id, name, avatar } = authUser;

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='w-full h-[64px] flex justify-between bg-[#373F51] border-b border-b-[#A9BCD0] border-opacity-50 text-white fixed top-0'>
      <Link to='/' className='w-1/3 pl-16 flex gap-2 items-center'>
        <img src={DiscusslyLogo} alt='DiscussLy_Logo' className='w-[35px]' />
        <h1 className='text-xl font-semibold'>DiscussLy</h1>
      </Link>
      <nav className='w-1/3 h-full flex justify-center items-end gap-4'>
        <Link
          to='/'
          className={`h-full px-2 pt-4 ${
            location.pathname === '/' && 'border-b-4'
          } border-b-[#58A4B0]`}
        >
          Discussions
        </Link>
        <Link
          to='/leaderboard'
          className={`h-full px-2 pt-4 ${
            location.pathname === '/leaderboard' && 'border-b-4'
          } border-b-[#58A4B0]`}
        >
          Leaderboard
        </Link>
      </nav>
      <div className='w-1/3 pr-16 flex justify-end'>
        {id ? (
          <UserProfile name={name} avatar={avatar} signOut={signOut} />
        ) : (
          <div className='w-1/2 flex gap-2 justify-end items-center'>
            <ButtonGeneral
              text='Register'
              type='secondary'
              rounded='full'
              onClick={() => navigate('/register')}
            />
            <ButtonGeneral
              text='Login'
              type='primary'
              rounded='full'
              onClick={() => navigate('/login')}
            />
          </div>
        )}
      </div>
    </div>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};
