import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'))

const Title = ()=>{
  return <h1>I am title</h1>
}
/**
 * 
 * @returns Browser will never know about components EOD it is a piece of HTML
 */
const HeadComponent = ()=>{
  return (
    <div>
      <Title/>
      <h1>Header in functional component!</h1>
    </div>
    )
}

root.render(<HeadComponent />)