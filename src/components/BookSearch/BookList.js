import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../BookCard';


function BookList() {
    const books = useSelector((state) => state.books.data);
    const loading = useSelector((state) => state.books.loading);
    const totalBooks = books ? books.totalItems : 0;
  
    return (
      <div>
         {loading ? <p>Загрузка...</p> : null}
            {totalBooks > 0 ? (
                <p>Найдено книг: {totalBooks}</p>
            ) : null}
            {books ? (
                <div className="book-list"> 
                {books.items.map((book) => (
                <BookCard key={book.id} book={book} />
                ))}
            </div>
            ) : null}
      </div>
    );
  }

export default BookList;