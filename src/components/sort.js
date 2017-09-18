import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl  } from 'react-bootstrap';
import '../App.css';


class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleClick = () => {
    let rawValues = this.state.value.split("\n");
    console.log('rawValues', rawValues);
    let unsorted = new Map();
    rawValues.forEach(function(rawValue){
      let matchedQ = rawValue.match(/R\d{3}[a-zA-Z]\d{3}/);
      if (matchedQ) {
        let lineValues = rawValue.split("\t");
        let matchedI = matchedQ[0].replace(/./g, (c, i) => i == 4? '*': c);
        unsorted.set(matchedI,lineValues);
      } else {
        console.log('Not matched', rawValue);
      }
    });
    console.log('unsorted', unsorted);
    this.props.addItem(unsorted);
  };

  render() {
    return (
      <div>
        <FormGroup controlId="formControlsTextarea" className="App-input">
          <ControlLabel className="input-txt">Input Data</ControlLabel>
          <div className="input-eg-txt">(Eg. "XOO1DA1G	Lorem ipsum dolor sit amet, consectetur adipiscing elit	12:30	P-1-R157A124")</div>
          <FormControl componentClass="textarea" placeholder="Insert query here..."
                       value={this.state.value} onChange={this.handleChange} />
        </FormGroup>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleClick}>Sort</Button>
    </div>
    );
  }
}

export default Sort;
