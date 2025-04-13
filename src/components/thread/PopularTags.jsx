import React from 'react';
import CardGeneral from '../general/CardGeneral';
import TagGeneral from '../general/TagGeneral';
import PropTypes from 'prop-types';

export default function PopularTags({ categories, onCategoryClick }) {
  return (
    <CardGeneral>
      <header className='w-full mb-4'>
        <h3 className='text-xl text-[#373F51] font-bold'>Popular Tags</h3>
      </header>
      <div className='w-full h-full flex flex-col justify-between'>
        <div className='w-full flex flex-wrap gap-1 max-h-[4.5rem] overflow-y-auto'>
          {categories.map((category) => {
            return (
              <TagGeneral
                key={category.category}
                text={category.category}
                selected={category.selected}
                onClick={() => onCategoryClick(category.category)}
              />
            );
          })}
        </div>
        <span className='text-xs pt-2 text-[#58A4B0] font-bold cursor-pointer'>
          See more tags {'>'}{' '}
        </span>
      </div>
    </CardGeneral>
  );
}

PopularTags.propTypes = {
  categories: PropTypes.array.isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};
