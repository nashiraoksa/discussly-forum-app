import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

export default function TextAreaGeneral({ placeholder, isEmpty, divRef, handleInput }) {
  useEffect(() => {
    handleInput();
  }, []);

  return (
    <div className='relative text-sm h-full'>
      {isEmpty && (
        <div className='absolute p-2 text-gray-400 pointer-events-none select-none'>
          {placeholder}
        </div>
      )}
      <div
        ref={divRef}
        contentEditable
        onInput={handleInput}
        className='h-auto min-h-36 max-h-60 border-b border-b-black p-2 focus:outline-none overflow-y-auto'
      ></div>
    </div>
  );
}

TextAreaGeneral.propTypes = {
  placeholder: PropTypes.string.isRequired,
  isEmpty: PropTypes.bool.isRequired,
  divRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  handleInput: PropTypes.func.isRequired,
};
