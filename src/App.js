import { Component } from 'react';
import './App.css';
import {CardList} from './component/card-list/card-list'
import {SearchBox} from './component/search-box/search-box.jsx'


class App extends Component {
  constructor() {
    super();

   this.state = {
    monster : [],
    searchField :''
   };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(data => {this.setState({monster:data})});
    
  }

  render() {
    const { monster , searchField } = this.state;
    const filterMonsters = monster.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
         <SearchBox  
         placeholder='monster'    
         handleChange={e=>this.setState({searchField: e.target.value})}
        />
        <CardList monster={filterMonsters}></CardList>
       
    </div>
    )
  }
}

export default App;
