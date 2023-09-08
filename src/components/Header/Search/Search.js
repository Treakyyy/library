import React from 'react';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';
import { useDispatch, useSelector } from 'react-redux';
import { searchBooks } from '../../../store/bookSlice';
import './Search.css'

const Search = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.books.searchQuery);
  const selectedCategory = useSelector((state) => state.books.selectedCategory);

  const handleSearch = () => {
    if (searchQuery && searchQuery.trim() !== '') {
      dispatch(searchBooks(searchQuery, selectedCategory));
    }
  };

  return (
    <div className='search-container'>
      <SearchInput onSearch={handleSearch} />
      <SearchButton
        searchQuery={searchQuery}
        searchBooks={searchBooks}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Search;




