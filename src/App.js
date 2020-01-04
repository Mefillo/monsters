import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: '',
    };

  }
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  } 

  handleChange = (e) => {
    this.setState({searchfield: e.target.value})
  }

  render(){
    const {monsters, searchfield} = this.state
    const monstersFiltered = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield))
    return (
      <div className="App">
        <SearchBox 
        placeholder = 'monsters search'
        handleChange = {this.handleChange}
       /> 
        <CardList monsters = {monstersFiltered}>
        </CardList> 
      </div>
    );
  }
}

export default App;
