import './App.css';

//components
import Blogs from './components/Blog'
import Comingsoon from './components/Comingsoon';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Blogs /> */}
       <Comingsoon />
      </div>
    );
  }
}

export default App;
