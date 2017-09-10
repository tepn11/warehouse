import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl  } from 'react-bootstrap';
import '../App.css';


class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleClick = () => {
    //regexp to get the number
    let matchedQ = this.state.value.match(/R\d{3}[a-zA-Z]\d{3}/);
    let matchedI = '';
    console.log(matchedQ);
    if (matchedQ) {
      console.log(matchedQ[0]);
      matchedI = matchedQ[0].replace(/./g, (c, i) => i == 4? '*': c);
      console.log(matchedI);
      this.props.addItem(matchedI);
    } else {
      // Alert('No Matching item found in query');
    }
  };

  render() {
    return (
      <div>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Input</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Insert query here..."
                       value={this.state.value} onChange={this.handleChange} />
        </FormGroup>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleClick}>Add</Button>
    </div>
    );
  }
}

export default Query;
