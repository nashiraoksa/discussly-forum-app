import PropTypes from 'prop-types';
import React from 'react';

export default function TagGeneral({ text, selected, onClick }) {
  let styleClass = '';

  switch (selected) {
    case true:
      styleClass += 'bg-[#373F51] text-[#D8DBE2] hover:font-medium ';
      break;
    case false:
      styleClass += 'bg-[#D8DBE2] text-[#373F51] hover:font-medium ';
      break;
    default:
      styleClass += 'bg-[#D8DBE2] text-[#373F51] hover:font-medium ';
  }

  return (
    <div
      className={`w-fit text-xs leading-1 px-4 py-2 rounded-full cursor-pointer ${styleClass}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

TagGeneral.propTypes = {
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};
