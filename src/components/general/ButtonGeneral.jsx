import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonGeneral({ text, type, rounded, icon, onClick }) {
  let styleClass = '';

  switch (type) {
    case 'primary':
      styleClass += 'bg-[#58A4B0] text-white hover:bg-[#498D9E] ';
      break;
    case 'secondary':
      styleClass +=
        'bg-transparent border border-white text-white hover:bg-[#58A4B0] hover:border-[#58A4B0] ';
      break;
    default:
      styleClass += 'bg-black text-white ';
  }

  switch (rounded) {
    case 'sm':
      styleClass += 'rounded-sm ';
      break;
    case 'md':
      styleClass += 'rounded-md ';
      break;
    case 'lg':
      styleClass += 'rounded-lg ';
      break;
    case 'xl':
      styleClass += 'rounded-xl ';
      break;
    case 'full':
      styleClass += 'rounded-full ';
      break;
    default:
      styleClass += 'rounded ';
  }

  return (
    <button
      type='button'
      className={`w-full py-2 px-4 pb-2 flex justify-center items-center gap-1 text-sm ${styleClass}`}
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}

ButtonGeneral.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  rounded: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};
