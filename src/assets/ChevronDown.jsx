import React from 'react';
import PropTypes from 'prop-types';

const ChevronDownIcon = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
      className={className}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
    </svg>
  );
};

export default ChevronDownIcon;

ChevronDownIcon.propTypes = {
  className: PropTypes.string.isRequired,
};
