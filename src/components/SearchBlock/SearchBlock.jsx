import React, { useState, useRef, useContext } from 'react';
import { DataContext } from "services/DataContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import useOutsideHandler from 'components/hooks/useDetectClickOutside'
import SearchIcon from 'assets/search-icon@2x.svg';

function SearchBlock() {
  const { state, updateState } = useContext(DataContext);
  const [activeSearch, setActiveSearch] = useState(false);
  const wrapperRef = useRef(null);

  const {
    values,
    handleSubmit,
    getFieldProps,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      searchKeywords: state.params.q
    },
    validationSchema: Yup.object().shape({
      searchKeywords: Yup.string()
        .min(3, "Must be more than 3 characters")
        .required("Required")
    }),
    onSubmit(values) {
      
      updateState({...state, ...{params:{...state.params, q:values.searchKeywords}, loading:true}} )
    },
  });
  
  useOutsideHandler(wrapperRef, activeSearch, setActiveSearch, values.searchKeywords);

  var formClasses = activeSearch ? "search-form active" : "search-form"
  return (
    <div className={formClasses} ref={wrapperRef}>
      <form className="form input-group mb-3" onSubmit={handleSubmit} >
        <div className="search-form-input">
          <span className="errorMessage">
            {touched["search"] && errors["search"]}
          </span>
          <input
            type="text"
            id="searchKeywords"
            className="form-control formField"
            placeholder="Search all news..."
            {...getFieldProps("searchKeywords")}
          />
        </div>
        <button className="btn" type="submit">
          <img src={SearchIcon} alt="Search Peaks" />
        </button>
        <div className="btn open" onClick={() => { setActiveSearch( true )}} >
          <img src={SearchIcon} alt="Search Peaks" />
        </div>
      </form>
    </div>
  );
}

export default SearchBlock;