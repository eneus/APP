import React, { useContext, useEffect, useState } from 'react'
import { Loading, PageTitle, Bookmark } from "components";
import { useLocation } from 'react-router-dom'
import { DataContext } from "services/DataContext";
import { serviceApi } from 'services/api'
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomePage() {
  const { state } = useContext(DataContext);
  const location = useLocation();
  const [marked, setMarked ] = useState(false)
  const [article, setArticle ] = useState(false)

  var localbookmarks = JSON.parse(localStorage.getItem('theguardian_bookmark'));
  
  useEffect(() => {
    if (state.results.find( item => item.id === location.pathname.substring(1) ) ){
      setArticle(state.results.find( item => item.id === location.pathname.substring(1) ))
    }
  }, [state])

  useEffect(() => {
    if (localbookmarks && localbookmarks.find( item => item.id === location.pathname.substring(1))){
      setMarked(true)
    }
  }, [marked])

  useEffect(() => {
    if (localbookmarks){
      if ((!article && localbookmarks.find( item => item.id === location.pathname.substring(1))) || !localbookmarks.find( item => item.id === location.pathname.substring(1))){
        serviceApi('GET', null, location.pathname.substring(1))
          .then(data => setArticle( data.response.content ));
      }
    }
  }, [])

  if (state.loading || !article) {
    return <Loading />;
  }

  function removeItem(arr, value) {
    var index = arr.findIndex(item => item.id === value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  function hendleClick () {
    var bookmarks;
    if (marked) {
      bookmarks = removeItem(localbookmarks, article.id);
      localStorage.setItem('theguardian_bookmark', JSON.stringify( bookmarks ));
      setMarked(marked ? false : true );
      toast.error("Removed from Bookmarks");
    } else {
      var lbookmarks = localbookmarks ? localbookmarks : []
      bookmarks = lbookmarks.concat(article);
      localStorage.setItem('theguardian_bookmark', JSON.stringify( bookmarks ));
      setMarked(marked ? false : true );
      toast.success("Saved to Bookmarks");
    }
  }
  
  return (
    <div className="single article">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{article.webTitle} | Seven Peaks Test task</title>
        <meta name="description" content={article.webTitle} />
      </Helmet>
      <div className="page-header">
        <PageTitle title={ article.webTitle } />
        <Bookmark text={marked ? "Remove Bookmark": "Add bookmark"} hendleClick={hendleClick} />
      </div>
      <div className="article row">
        <div className="page-content col-md-8">
          <div
            dangerouslySetInnerHTML={{
              __html: article.fields.body ? article.fields.body : 'No Description'
            }}></div>
        </div>

        {article.fields.thumbnail ?
        <div className="article-img col-md-4">
        <img
            alt={article.webTitle}
            className="card-img-top thumbnail"
            src={article.fields.thumbnail}
          />
          <span className="img-title">
            {article.webTitle}
          </span>
        </div> : '' }
      </div>
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover />
    </div>
  );
}

export default HomePage;
