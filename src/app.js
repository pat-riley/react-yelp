import React from 'react'
import ReactDOM from 'react-dom'

const App = React.createClass({
  render: function() {
    return (<div>Text goes here</div>);
  }
});

// In order to mount the <App /> on the page we need to DOM node reference to set it up
// hjs-webpack default template includes a <div/> component with ID of #root
// grab a hold of the DOM node with the id of root and render out basic App
const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);
