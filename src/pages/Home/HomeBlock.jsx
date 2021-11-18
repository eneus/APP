import React, { useState, useEffect } from 'react';
// import { DataContext } from "services/DataContext";
import { Loading, Card } from "components";
import { serviceApi } from 'services/api'

function HomeBlock() {
  // const { state, updateState } = useContext(DataContext);
  const [blocknews, setBlocknews] = useState([]);

  const params = {
    "order-by": "newest",
    "page-size": 3,
    "section":"sport|culture|lifeandstyle"
  }

  useEffect(() => {
    // GET request using fetch inside useEffect React hook

    serviceApi('GET', params)
    .then(data => setBlocknews( data.response ));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (blocknews.length === 0) {
    return <Loading />;
  }

  return (
    <div className="container items">
      <h2 className="title">Sports</h2>
      <div className="row">
      {blocknews.results.map(({ id, webTitle, sectionId, fields }) => (
        <Card
          key={id}
          id={id}
          webTitle={webTitle}
          sectionId={sectionId}
          fields={fields}
        />
      ))}
      </div>
    </div>
  );
}

export default HomeBlock;