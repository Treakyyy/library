import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../../store/bookSlice';
import './SearchInput.css'

function SearchInput({ onSearch }) {
  const searchQuery = useSelector((state) => state.books.searchQuery);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(); 
    }
  };

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
      placeholder="Введите запрос..."
      className='search-input'
    />
  );
}


export default SearchInput;