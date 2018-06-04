import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RTable from './components/RTable';
import RHeader from './components/RHeader';
import RBody from './components/RBody';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { id: 'first', name: 'First' },
        { id: 'last', name: 'Last' },
        { id: 'book', name: 'Book' },
        { id: 'food', name: 'Food' },
      ],
      data: [
        { id: '1', first: 'John', last: 'Snow', book: 'Mary had a little lamb', food: 'Rabbit' },
        { id: '2', first: 'Jim', last: 'Bean', book: 'Zen and the Art of Motorcycle Maintenance', food: 'Steak' },
        { id: '3', first: 'Lisa', last: 'Simpson', book: 'How to Cook Everything Vegetarian', food: 'Tofu' },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RTable>
          <RHeader columns={this.state.columns} />
          <RBody data={this.state.data} />
        </RTable>
      </div>
    );
  }
}

export default App;
