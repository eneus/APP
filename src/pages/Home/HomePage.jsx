import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Loading, PageTitle, Dropdown, Bookmark, Card } from "components";
import HomeBlock from './HomeBlock'
import { DataContext } from "services/DataContext";
import {Helmet} from "react-helmet";

function HomePage() {
  const { state } = useContext(DataContext);
  const history = useHistory()

  if (state.loading) {
    return <Loading />;
  }

  return (
    <div className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home page | Seven Peaks Test task</title>
          <meta name="description" content="Seven Peaks Test task" />
        </Helmet>
      <div className="page-header">
        <PageTitle title="Top Stories" />
        <Dropdown />
        <Bookmark text="View Bookmark" hendleClick={() => { history.push('/bookmarks')}} />
      </div>
      <div className="page-content row">
        {state.results.map(({ id, webTitle, sectionId, fields }) => (
          <Card
            key={id}
            id={id}
            webTitle={webTitle}
            sectionId={sectionId}
            fields={fields}
          />
        ))}
      </div>
      <HomeBlock />
    </div>
  );
}

export default HomePage;
