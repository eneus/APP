import React, { useEffect, useState } from 'react'
import Basic from 'layouts/Basic'
import Routes from 'pages'
import { DataContext } from 'services/DataContext';
import { serviceApi } from 'services/api'

function App() {
  const { initial } = React.useContext(DataContext);
  const [state, updateState ] = useState(initial);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    if (state.loading === true){
      serviceApi('GET', state.params)
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
