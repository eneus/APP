import React from 'react';

export const initialState = {
  loading: true,
  errMessage: null,
  total: 0,
  startIndex: 1,
  pageSize: 8,
  currentPage: 1,
  pages: 0,
  orderBy: "newest",
  article: {},
  searchKeywords: "",
  // params: {
  //   "order-by": "newest",
  //   "page-size": 8,
  // },
  results: [],
}

export const DataContext = React.createContext({
  initial: initialState, // default value
  updateState: () => {},
});
