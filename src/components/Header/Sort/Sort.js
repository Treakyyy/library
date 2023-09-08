import React from 'react';
import CategorySelect from './CategorySelect';
import SortSelect from './SortSelect';
import './Sort.css'

const Sort = ({ searchBooks, selectedSort, selectedCategory }) => {
    return (
        <div className='sort-container'>
           <div className='categories'>
                <h5>Categories</h5>
                <CategorySelect searchBooks={searchBooks} selectedSort={selectedSort} selectedCategory={selectedCategory} />
            </div>
            <div className='sort'>
                <h5>Sorting by</h5>
                <SortSelect selectedSort={selectedSort} />
            </div> 
        </div>
    );
};

export default Sort;