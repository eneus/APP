import React from 'react';

export const initialState = {
  loading: true,
  errMessage: null,
  total: 0,
  startIndex: 1,
  currentPage: 1,
  pages: 0,
  article: {},
  params: {
    "order-by": "newest",
    "page-size": 8,
    "q": "",
  },
  results: [],
}

export const DataContext = React.createContext({
  initial: initialState, // default value
  updateState: () => {},
});
