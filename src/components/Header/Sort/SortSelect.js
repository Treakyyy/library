import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedSort } from '../../../store/bookSlice';
import './SortSelect.css'


function SortSelect() {
    const selectedSort = useSelector((state) => state.books.selectedSort);
    const dispatch = useDispatch();
  
    const handleSortChange = (e) => {
      dispatch(setSelectedSort(e.target.value));
    };
  
    return (
      <select className='sort-color' value={selectedSort} onChange={handleSortChange}>
        <option className='sort-option' value="relevance">Популярные</option>
        <option className='sort-option' value="newest">Самые новые</option>
      </select>
    );
  }

export default SortSelect;