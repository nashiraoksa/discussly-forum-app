import React from 'react';
import PropTypes from 'prop-types';

export default function InputGeneral({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className='w-full p-2 text-sm border-b border-b-black focus:outline-none'
    />
  );
}

InputGeneral.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
