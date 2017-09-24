import React, { Component } from 'react';
import './App.css';
import Sort from './components/sort';
import ListItems from './components/listItems'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], sortedItems: [], formattedSort: [] };
  }

  handleAddItem = (val) => {
    this.setState({ items: val }, this.calculate);
  }

  calculate(){
    fetch('https://warehouse123-api.herokuapp.com/api/sort', {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        data: this.state.items
      })
    })
    .then(result => {
      result.json()
        .then((data) => {
          this.setState({
            formattedSort: data
          });
        });

    });

  }

  render() {
    console.log('App state: ', this.state);
    return (
      <div className="App">
        <div className="App-header">
          <span className="App-title">Warehouse</span>
        </div>
        <div id="App-body">
          <form >
            <Sort addItem={this.handleAddItem} />
            <ListItems listItems={this.state.formattedSort}/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
