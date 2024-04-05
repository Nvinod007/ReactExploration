import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', { id: 'heading' }, 'Hello world from React')
const root = ReactDOM.createRoot(document.getElementById('root'))

console.log('heading', heading);

// Render neted elements in react
const parent1 = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement(
    'div',
    { id: 'child' },
    React.createElement(
      'h1',
      { id: 'heading' },
      'Hello world from React in child')
  )
)

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
root.render(heading)
root.render(parent)