import React, { useEffect, useState } from 'react'
import Basic from 'layouts/Basic'
import Routes from 'pages'
import { DataContext } from 'services/DataContext';
import { serviceApi } from 'services/api'

function App() {
  const { initial } = React.useContext(DataContext);
  const [state, updateState ] = useState(initial);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const params = {
    "order-by": state.orderBy,
    "page-size": state.pageSize,
    "q": state.searchKeywords,
  }
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    if (state.loading === true){
      serviceApi('GET', params)
        .then(data => updateState( {...state, ...{...{loading:false}, ...data.response}} ));
    }
  }, [state])

  return (
    <DataContext.Provider value={{ state, updateState}}>
      <Basic >
        <Routes />
      </Basic>
    </DataContext.Provider>
  );
}

export default App;
