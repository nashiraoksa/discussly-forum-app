import React from 'react';
import PropTypes from 'prop-types';

export default function CardGeneral({ children }) {
  return (
    <div className='w-full h-fit p-6 flex flex-col justify-start items-center bg-white border border-[#EAEAEA] shadow-md rounded-xl'>
      {children}
    </div>
  );
}

CardGeneral.propTypes = {
  children: PropTypes.element,
};
