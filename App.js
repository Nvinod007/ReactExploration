import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'))

const element = <span>I am an element </span>
const Title = ()=>{
  return <h1>I am title</h1>
}
const TitleElement = (<h1>{element}I am title</h1>)
const value = 99

/**
 * 
 * @returns Browser will never know about components EOD it is a piece of HTML
 * ? Component composition wraping component into another component
 * * Component inside an Elemnt ==> valid
 * * Element inside a Component ==> valid
 * * Element inside an Elemnt ==> valid
 * * Component inside a Component ==> valid
 * 
 */
const HeadComponent = ()=>{
  return (
    <div>
      <Title/>
      {/* IN JSX WE CAN WRITE JS BY USING '{}' */}
      {TitleElement}
      {TitleElement + value}
      <h1>Header in functional component!</h1>
    </div>
    )
}

root.render(<HeadComponent />)