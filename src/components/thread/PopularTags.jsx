import React, { useState } from 'react';
import CardGeneral from '../general/CardGeneral';
import TagGeneral from '../general/TagGeneral';

export default function PopularTags() {
  // data dummy
  const threads = [
    { id: 'thread-1', title: 'Thread Pertama', body: '...', category: 'General' },
    { id: 'thread-2', title: 'Thread Kedua', body: '...', category: 'Tech' },
    { id: 'thread-3', title: 'Thread Ketiga', body: '...', category: 'General' },
    { id: 'thread-4', title: 'Thread Keempat', body: '...', category: 'Tech' },
    { id: 'thread-5', title: 'Thread Kelima', body: '...', category: 'Science' },
    { id: 'thread-5', title: 'Thread Kelima', body: '...', category: 'Scienc' },
    { id: 'thread-5', title: 'Thread Kelima', body: '...', category: 'xsence' },
    { id: 'thread-5', title: 'Thread Kelima', body: '...', category: 'programming' },
    { id: 'thread-5', title: 'Thread Kelima', body: '...', category: 'coffee' },
    { id: 'thread-5', title: 'Thread Kelima', body: '...', category: 'computer' },
    { id: 'thread-5', title: 'Thread Kelima', body: '...', category: 'chair' },
    { id: 'thread-5', title: 'Thread Kelima', body: '...', category: 'rubik' },
  ];

  // const [selected, setSelected] = useState(false);

  const initialCategories = [
    ...new Map(
      threads.map((thread) => [thread.category, { category: thread.category, selected: false }])
    ).values(),
  ];

  const [categories, setCategories] = useState(initialCategories);

  const handleCategoryClick = (categoryClicked) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.category === categoryClicked
          ? { ...category, selected: !category.selected } // toggle selected
          : category
      )
    );

    // TODO: filter thread by category and display thread item
  };

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
                onClick={() => handleCategoryClick(category.category)}
              />
            );
          })}
        </div>
        <span className='text-sm pt-2 text-[#58A4B0] font-semibold cursor-pointer'>
          See more tags {'>'}{' '}
        </span>
      </div>
    </CardGeneral>
  );
}
