import React, { Component } from 'react';
import './App.css';
import Cards from './component/cards.jsx';
import Nav from './component/nav.jsx';

class App extends Component {
  state = { 
    data: [],
    value: '', //input에 입력하는 value
    search: [],
  }

  onSubmit = () => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${this.state.value}&type=video&key=REACT_APP_API_KEY`)
      .then(response => response.text())
      .then(result => this.setState({search: [...this.state.search, JSON.parse(result)]}))
      .catch(error => console.log('error', error));
  }

  componentDidMount() {
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=REACT_APP_API_KEY")
    .then(response => response.text())
    .then(result => this.setState({data: [...this.state.data, JSON.parse(result)]}))
    .catch(error => console.log('error', error));
  }
  
  render() {
    return (
      <div className="App">
        <Nav onSubmit={this.onSubmit} value={this.state.value}/>
        <Cards search={this.onSubmit} items={this.state.data}/>
      </div>
    );
  }
}

export default App;
