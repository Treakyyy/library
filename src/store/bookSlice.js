import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'AIzaSyAZT2lvXFa9JOxI1o0xik8_2ksmM7_eu2o';

export const searchBooks = createAsyncThunk('books/search', async (query, { getState }) => {
  const selectedCategory = getState().books.selectedCategory;
  const selectedSort = getState().books.selectedSort;
  const currentPage = getState().books.currentPage;
  const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
    params: {
      q: query,
      key: API_KEY,
      subject: selectedCategory !== 'all' ? selectedCategory : undefined,
      orderBy: selectedSort,
      startIndex: (currentPage - 1) * 30, 
      maxResults: 30,
    },
  });
  return response.data;
});

const bookSlice = createSlice({
    name: 'books',
    initialState: {
      data: null,
      loading: false,
      error: null,
      searchQuery: '', 
      selectedCategory: 'all',
      selectedSort: 'relevance',
      currentPage: 1,
      selectedBook: null,
    },
    reducers: {
      setSearchQuery: (state, action) => {
        state.searchQuery = action.payload;
      },
      setSelectedCategory: (state, action) => {
        state.selectedCategory = action.payload;
      },
      setSelectedSort: (state, action) => {
        state.selectedSort = action.payload;
      },
      incrementPage: (state) => {
        state.currentPage += 1; 
      },
      setSelectedBook: (state, action) => {
        state.selectedBook = action.payload; // Обновление выбранной книги
      }
    },
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(searchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
export const { setSearchQuery, setSelectedCategory, setSelectedSort, incrementPage, setSelectedBook } = bookSlice.actions;