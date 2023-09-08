import React from 'react';
import { useDispatch } from 'react-redux';
import './SearchButton.css'

function SearchButton( {searchQuery, searchBooks, selectedCategory} ) {
    const dispatch = useDispatch();
  
    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
          dispatch(searchBooks(searchQuery, selectedCategory));
        }
      };
  
    return (
      <button className='button' onClick={handleSearch}>Search</button>
    );
  }

export default SearchButton;