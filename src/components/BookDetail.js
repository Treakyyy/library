import React from 'react';
import { useSelector } from 'react-redux';
import './BookDetail.css'
import Header from '../components/Header/Header'
import { Link } from 'react-router-dom';

function BookDetail() {
  const selectedBook = useSelector((state) => state.books.selectedBook);

  if (!selectedBook) {
    return null; 
  }

  const { volumeInfo } = selectedBook;

  return (
    <div>
      <Header/>
      <div className="book-detail">
          <img
              src={volumeInfo.imageLinks?.thumbnail || 'placeholder-image-url'} 
              alt={volumeInfo.title || 'No Title'}
              className='book-detail-img'
          />
          <div>
            <p>Категории: {volumeInfo.categories?.join(', ') || 'Без категорий'}</p>
            <h2>{volumeInfo.title || 'No Title'}</h2>
            <p>Авторы: {volumeInfo.authors?.join(', ') || 'Без авторов'}</p>
            <p>Описание: {volumeInfo.description || 'Нет описания'}</p>
            <Link to='/'><button className='button'>Back</button></Link>
          </div>
      </div>
    </div>
  );
}

export default BookDetail;