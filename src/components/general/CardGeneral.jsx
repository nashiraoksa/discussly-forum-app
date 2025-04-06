import React from 'react';
import PropTypes from 'prop-types';

export default function CardGeneral({ children }) {
  return (
    <div className='w-auto h-auto p-6 flex flex-col justify-center items-center gap-4 bg-white border border-[#EAEAEA] shadow-md rounded-xl'>
      {children}
    </div>
  );
}

CardGeneral.propTypes = {
  children: PropTypes.element,
};
