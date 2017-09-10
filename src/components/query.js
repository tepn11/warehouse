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
    this.props.addItem(this.state.value);
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
