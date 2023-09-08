import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchBooks } from '../../store/bookSlice';
import BookList from './BookList';
import LoadMoreButton from './LoadMoreButton';
import Header from '../Header/Header';

function BookSearch() {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.data);
    const searchQuery = useSelector((state) => state.books.searchQuery);
    const selectedCategory = useSelector((state) => state.books.selectedCategory);
    const selectedSort = useSelector((state) => state.books.selectedSort);
    const currentPage = useSelector((state) => state.books.currentPage);

    const handleSearch = () => {
      if (searchQuery.trim() !== '') {
        dispatch(searchBooks(searchQuery, selectedCategory));
      }
    };
  
    return (
        <div>
          <Header onSearch={handleSearch} searchBooks={searchBooks} selectedSort={selectedSort}/>
          <BookList/>
          {books && books.totalItems > books.items.length ? (
          <LoadMoreButton
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            selectedSort={selectedSort}
            currentPage={currentPage}
            searchBooks={searchBooks}
          />
          ) : null}
        </div>
    );
}

export default BookSearch;
