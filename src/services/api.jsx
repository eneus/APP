import _ from 'lodash'
// Helper for api errors
import { handleApiErrors } from './handleApiErrors'

const apiUrl = 'https://content.guardianapis.com/'
const apiKey = 'test'


function objToQueryString(obj) {
  const keyValuePairs = [];
  const defaultValuePairs = { 
    "api-key": apiKey,
    "show-fields": "body,thumbnail"
  };
  let queryValuePairs = {...defaultValuePairs, ...obj}
  for (const key in queryValuePairs) {
    keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryValuePairs[key]));
  }
  return '?'+keyValuePairs.join('&');
}

// service API
export async function serviceApi( method, params, id ) {

  var requestUrl = [apiUrl];
  var hostOrigin = window.location.origin;

  let queryHead = {
    mode: 'cors',
    method: method,
    host: hostOrigin,
    origin: hostOrigin,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (id) {
    requestUrl.push(id);
  } 
  var param = objToQueryString( params );

  // if (params) {
    if (!id){
      requestUrl.push('search');
    }
    requestUrl.push(param);
  // } 

  var fetchUrl = requestUrl.join('');

  return await fetch(fetchUrl, queryHead)
    .then(handleApiErrors)
    .then(response => response.json())
    .catch(err => {
      alert('error!')
    })
}