import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementPage, searchBooks } from '../../store/bookSlice';

function LoadMoreButton({ searchQuery, selectedCategory, selectedSort, currentPage }) {
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(searchBooks(searchQuery, selectedCategory, selectedSort, currentPage + 1));
  };

  return (
    <button className='button' onClick={handleLoadMore}>Load more</button>
  );
}

export default LoadMoreButton;