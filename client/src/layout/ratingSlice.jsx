import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  partialReviewList: [],
  reviewList: [],
  sortType: 'newest',
};

const ratingSlice = createSlice({ name: 'rating', initialState });

console.log(ratingSlice);
