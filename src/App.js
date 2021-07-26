import './App.css';

//components
import Blogs from './components/Blog'
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Blogs />
      </div>
    );
  }
}

export default App;
