import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component{
  render(){
    return (
      <span>Hello</span>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
