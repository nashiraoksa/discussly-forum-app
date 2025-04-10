import React, { useRef, useState } from 'react';
import InputGeneral from '../general/InputGeneral';
import ButtonGeneral from '../general/ButtonGeneral';
import TextAreaGeneral from '../general/TextAreaGeneral';
import useInput from '../../hooks/useInput';
import PropTypes from 'prop-types';

export default function ThreadInput({ createThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const divRef = useRef('');

  const handleBodyInput = () => {
    if (divRef.current) {
      const inputText = divRef.current.innerText;
      onBodyChange(inputText);
      setIsEmpty(inputText.trim() === '');
    }
  };

  const onSubmit = () => {
    createThread();
    console.log(title, category, body);
  };

  return (
    <form action='' className='w-full h-[60vh] flex flex-col gap-6 justify-start pt-8'>
      <div className='flex flex-col gap-4'>
        <InputGeneral type='email' placeholder='Title' value={title} onChange={onTitleChange} />
        <InputGeneral
          type='text'
          placeholder='Category'
          value={category}
          onChange={onCategoryChange}
        />
        <div className=''>
          <TextAreaGeneral
            placeholder='Discussion'
            isEmpty={isEmpty}
            divRef={divRef}
            handleInput={handleBodyInput}
          />
        </div>
      </div>
      <div className='flex items-start'>
        <ButtonGeneral type='primary' text='Create Thread' onClick={onSubmit} />
      </div>
    </form>
  );
}

ThreadInput.propTypes = {
  createThread: PropTypes.func.isRequired,
};
