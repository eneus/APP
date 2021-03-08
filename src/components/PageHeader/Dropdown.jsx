import React from 'react';
import { DataContext } from "services/DataContext";

function Dropdown() {
  const { state, updateState } = React.useContext(DataContext);
  return (
    <ul className="dropdown items">
      <li className="item" onClick={ () => updateState( {...state, ...{orderBy:"newest", loading:true}} )} >
        Newest First
      </li>
      <li className="item" onClick={ () => updateState( {...state, ...{orderBy:"oldest", loading:true}} )}>
        Oledst First
      </li>
      <li className="item" onClick={ () => updateState( {...state, ...{orderBy:"relevance", loading:true}} )}>
        Relevance
      </li>
    </ul>
  );
}

export default Dropdown;
