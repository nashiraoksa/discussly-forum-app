import React, { useRef, useState } from 'react';
import TextAreaGeneral from '../general/TextAreaGeneral';
import ButtonGeneral from '../general/ButtonGeneral';
import PropTypes from 'prop-types';

export default function CommentInput({ createComment }) {
  const [comment, setComment] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const divRef = useRef('');

  const handleCommentInput = () => {
    if (divRef.current) {
      const inputText = divRef.current.innerText;
      setComment(inputText);
      setIsEmpty(inputText.trim() === '');
    }
  };

  return (
    <div>
      <h5 className='text-lg text-[#373F51] font-semibold'>Write a comment</h5>
      <form action='' className='w-full flex flex-col gap-5'>
        <TextAreaGeneral
          placeholder='Comment'
          isEmpty={isEmpty}
          divRef={divRef}
          handleInput={handleCommentInput}
        />
        <ButtonGeneral
          text='Comment'
          type='primary'
          rounded='md'
          onClick={() => createComment(comment)}
        />
      </form>
    </div>
  );
}

CommentInput.propTypes = {
  createComment: PropTypes.func.isRequired,
};
