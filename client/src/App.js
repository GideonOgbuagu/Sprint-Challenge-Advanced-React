import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import WomensList from './components/WomensList';

class App extends Component {
  state = {
    women: []
  } 

  componentDidMount() {
      axios
        .get("http://localhost:5000/api/players")
        .then(res => {
          // console.log(res.data);
          this.setState({women: res.data});
        })
        .catch(err => {
          console.log(err);
        })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">     
          <h1>
            Women's World Cup - Google Trends
          </h1>
        </header>  
      <WomensList women={this.state.women}/>   
      </div>
    );
  }
  
}

export default App;
