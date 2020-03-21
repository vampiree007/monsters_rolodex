import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list_component'
import { SearchBox } from './components/searchbox/searchbox.component'
//import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) 
    )
    return (
      <div className="App">
        <h1>Monster Rolodox</h1>
        <SearchBox placeholder='Search Monsters'
        handleChange={ e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters={filteredMonster}></CardList>
        
    </div>
    )
  }
}

export default App;
