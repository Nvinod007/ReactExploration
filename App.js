import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'))
const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement(
    'div',
    { id: 'child' },
   [ React.createElement('h1',{ id: 'heading' },'React child heading 1'),
    React.createElement('h2', { id: 'heading2' },' React child heading 2'),
    ]
  )
)
console.log('parent', parent);

const JSXParent = <h1 id='head1'>Heading </h1>

// React Components
/**
 * ? Functional Based and Class Based
 * * Functional Based component is nothing but a function which returns  JSX
 * 
 */
// ! Functional component
const HeadComponent = ()=>{
  return <h1>Header in functional component!</h1>
}

// * Difference Between component and Element
const HeadComponent1 = ()=> <h1>Header in functional component!</h1>
const HeadElement =  <h1>Header in functional component!</h1>

/**
 * ? root.render(JSXParent) is for react elements
 * ? root.render(<HeadComponent />) is for react components
 */
root.render(<HeadComponent />)