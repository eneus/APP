import React from 'react'
import { PageTitle, Card } from "components";
import { Helmet } from "react-helmet";

function BookmarksPage() {

  var localbookmarks = JSON.parse(localStorage.getItem('theguardian_bookmark'));

  return (
    <div className="bookmarks">
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Bookmarks | Seven Peaks Test task</title>
        <meta name="description" content="Seven Peaks Test task bookmarks page" />
      </Helmet>
      <div className="page-header">
        <PageTitle title="All bookmark" />
      </div>
      <div className="page-content row">
        {localbookmarks ?
        localbookmarks.map(({ id, webTitle, sectionId, fields }) => (
          <Card
            key={id}
            id={id}
            webTitle={webTitle}
            sectionId={sectionId}
            fields={fields}
          />
        )) : <div className="emety">You have no any bookmarks yet</div> }
      </div>
    </div>
  );
}

export default BookmarksPage
