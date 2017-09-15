import React, { Component, ReactDOM } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Sort from './components/sort';
import ListItems from './components/listItems'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], sortedItems: [] };
    this.initArray();
  }

  initArray() {
    var lineArr = [];
    var asc = false;
    var minAisle = 101;
    var maxAisle = 320;
    var minBin = 100;
    var maxBin = 540;

    for(var aisle = minAisle; aisle < maxAisle; aisle += 2) {
      var bin;
      if(asc){
        for(bin=minBin; bin<=maxBin; bin++) {
          lineArr.push('R'+aisle+'*'+bin);
          lineArr.push(('R'+(aisle + 1))+'*'+bin);
        }
        asc = false;
      } else {
        for(bin=maxBin; bin>=minBin; bin--) {
          lineArr.push('R'+aisle+'*'+bin);
          lineArr.push(('R'+(aisle + 1))+'*'+bin);
        }
        asc = true;
      }
    }

    this.lineArr = lineArr;
  }

  calculate(){
    let unsorted = this.state.items;
    let sorted = [];

    for (let i = 0; i < unsorted.length; i++){
      sorted[this.lineArr.indexOf(unsorted[i])] = unsorted[i];
    }
    sorted = sorted.filter(n => true);
    console.log("Sorted", this.sorted);

    this.setState({
      sortedItems: sorted
    });
  }

  handleClick = () => {
    console.log('Sorting');
    this.calculate();
  }

  handleAddItem = (val) => {
    this.setState({ items: val }, this.calculateV2);
  }

  calculateV2(){
    let appThis = this;
    let unsorted = this.state.items;
    let sorted = [];

    if (unsorted.size > 0){
      unsorted.forEach(function(v,k){
        console.log(v);
        console.log(k);
        sorted[appThis.lineArr.indexOf(k)] = v;
      });
    }

    sorted = sorted.filter(n => true);
    console.log("Sorted", this.sorted);

    this.setState({
      sortedItems: sorted
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
            <ListItems listItems={this.state.sortedItems}/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
