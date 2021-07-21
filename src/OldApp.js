import logo from './logo.svg';
import './App.css';
import { React, Component } from 'react';
import ClickChange from './ClickChange';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters:[
        {
          name:'Dracula',
          id:1
        },
        {
          name:'Frankenstein',
          id:2
        },
        {
          name:'Zombie',
          id:3
        },
      ],
      numbers:[1,2,3,4]

      
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
         {
           this.state.monsters.map(monster => <h1 key = {monster.id}>{monster.name}</h1>)
         }
         <ClickChange/>
        </header>
      </div>
    );
  }
}

export default App;
