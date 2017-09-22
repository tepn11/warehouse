import React, { Component, ReactDOM } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Sort from './components/sort';
import ListItems from './components/listItems'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], sortedItems: [], formattedSort: [] };
    this.initArray();
  }

  initArray() {
    var lineArr = [];
    var asc = false;
    var minAisle = 101;
    var maxAisle = 320;
    var minBin = 100;
    var maxBin = 550;
    var lineMap = new Map();

    for(var aisle = minAisle; aisle < maxAisle; aisle += 2) {
      var bin;
      var binObj = {
        asc: asc,
        aisle: aisle
      };
      if(asc){
        for(bin=minBin; bin<=maxBin; bin++) {
          binObj.bin = bin;
          lineArr.push('R'+aisle+'*'+bin);
          lineMap.set('R'+aisle+'*'+bin, binObj);
          lineArr.push(('R'+(aisle + 1))+'*'+bin);
          lineMap.set(('R'+(aisle + 1))+'*'+bin, binObj);
        }
        asc = false;
      } else {
        for(bin=maxBin; bin>=minBin; bin--) {
          binObj.bin = bin;
          lineArr.push('R'+aisle+'*'+bin); 
          lineMap.set('R'+aisle+'*'+bin, binObj);
          lineArr.push(('R'+(aisle + 1))+'*'+bin); 
          lineMap.set(('R'+(aisle + 1))+'*'+bin, binObj);
        }
        asc = true;
      }
    }

    this.lineArr = lineArr;
    this.lineMap = lineMap;
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
    let counter = 0;

    if (unsorted.length > 0){
      unsorted.forEach(function(v,k){
        let value = v.lineValues;
        value.push(v.matchedI);
        let matchedIndex = appThis.lineArr.indexOf(v.matchedI);
        if(matchedIndex){
          if(!sorted[matchedIndex]) {
            sorted[matchedIndex] = [];
          }
          sorted[matchedIndex].push(v);

        } else {
          console.log('Not matched', k);
        }
      });
    }

    sorted = sorted.filter(n => true);
    console.log("Sorted", this.sorted);

    let formattedSort = [];
    let prev;
    sorted.forEach(function(sortedValArr,i){
      sortedValArr.forEach(function(v,i) {
        let binData = appThis.lineMap.get(v.lineValues[4]);
        if (prev && prev.asc === binData.asc && prev.aisle !== binData.aisle) {
          formattedSort.push('Go to next available aisle');
        }
        counter += 1;
        // delete v[2];
        delete v.lineValues[4];
        v.lineValues.unshift(counter);
        formattedSort.push(v.lineValues);
        prev = binData;
      });
    });

    this.setState({
      sortedItems: sorted,
      formattedSort: formattedSort
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
