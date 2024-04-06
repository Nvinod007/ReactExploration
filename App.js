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

/*
* JSX - HTML/XML like syntax but not HTML or XML! JSX != HTML
* JSX is not a valid JavaScript
* JSX ==> React.CreateElement ==> React element - JS Object ==> HTML Element
* Babel is converting the JSX to React.CreateElement
* Babel is JS compiler, converts new latest code to old code for old browsers.
* in HTML i have to 'Class' in JSX i have to write 'ClassName'.
* But if you see renderd page -> inspect -> element you will class ultimately
* Because JSX will be converted to HTML at the EOD
*/
const JSXParent = <div id='JSXParent'>
  <h1 id='head1'>JSX child head1</h1>
  <h1 id='head2' className='head1'>JSX child head2</h1>
</div>
console.log('parent', parent);
console.log('parent', JSXParent);
root.render(JSXParent)