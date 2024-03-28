import React from 'react'
import { useRouteError } from 'react-router-dom';

function Error() {

  const errorObj= useRouteError();

  return (
    <div>

      <h1>OOps!</h1>
      <h2>Something went wrong!</h2>
      <h3>Received Following Object from 'useRouteError()' : {JSON.stringify(errorObj)}</h3>
      <h5></h5>
    </div>
  )
}

export default Error;
