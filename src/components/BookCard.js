import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedBook } from '../store/bookSlice';
import './BookCard.css'

function BookCard({ book }) {

    const dispatch = useDispatch();

    const handleCardClick = () => {
      dispatch(setSelectedBook(book)); 
    };

  return (
    <div className="book-card" onClick={handleCardClick}>
      <Link className='link' to={`/book/${book.id}`}> 
        <img
          src={book.volumeInfo.imageLinks?.thumbnail || 'placeholder-image-url'}
          alt={book.volumeInfo.title || 'No Title'}
          className='book-img'
        />
        <div>
          <p className='categories-authors'>Категория: {book.volumeInfo.categories?.[0] || 'Без категории'}</p>
          <h3>{book.volumeInfo.title || 'No Title'}</h3>
          <p className='categories-authors'>Авторы: {book.volumeInfo.authors?.join(', ') || 'Без авторов'}</p> 
        </div>
      </Link>
    </div>
  );
}

export default BookCard