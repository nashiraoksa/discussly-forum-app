import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='w-full h-[40vh] bg-[#1B1B1E] text-[#D8DBE2] flex flex-col justify-center items-center gap-3'>
      <h4 className='text-xl font-medium'>DiscussLy Forum App</h4>
      <p className='w-3/5 text-center text-sm'>
        This app is developed by Nashira Oksani as a submission project for Menjadi React Developer
        Expert class during the IDCamp 2024 program. The UI is built using ReactJS framework,
        utilizing React Redux as the state management, and TailwindCSS for the styling. As for the
        API is provided by{' '}
        <a href='https://forum-api.dicoding.dev/v1/#/?id=dicoding-forum-api' className='underline'>
          Dicoding Forum API.
        </a>
      </p>
      <div className='flex gap-4 mt-2'>
        <a href='https://github.com/nashiraoksa'>
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/nashiraoksani/'>
          <FaLinkedin />
        </a>
        <a href=''>
          <FaFacebookF />
        </a>
        <a href=''>
          <FaInstagram />
        </a>
        <a href=''>
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}
