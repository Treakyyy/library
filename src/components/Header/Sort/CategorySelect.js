import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../../../store/bookSlice';

function CategorySelect({ searchBooks, selectedSort }) {
    const selectedCategory = useSelector((state) => state.books.selectedCategory);
    const dispatch = useDispatch();
  
    const handleCategoryChange = (e) => {
      dispatch(setSelectedCategory(e.target.value));
      dispatch(searchBooks('', e.target.value, selectedSort));
    };
  
    return (
      <select className='sort-color' value={selectedCategory} onChange={handleCategoryChange}>
        <option className='sort-option' value="all">Все категории</option>
        <option className='sort-option' value="art">Искусство</option>
        <option className='sort-option' value="biography">Биография</option>
        <option className='sort-option' value="computers">Компьютеры</option>
        <option className='sort-option' value="history">История</option>
        <option className='sort-option' value="medical">Медицина</option>
        <option className='sort-option' value="poetry">Поэзия</option>
      </select>
    );
  }

export default CategorySelect;