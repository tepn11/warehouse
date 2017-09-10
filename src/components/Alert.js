import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, Alert  } from 'react-bootstrap';
import '../App.css';


class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', alertVisible: false};
  }

  handleAlertDismiss = () => {
    this.setState({alertVisible: false});
  }

  handleAlertShow = () => {
    this.setState({alertVisible: true});
  }

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
          <h4>Error</h4>
          <p>No Matching row found in query</p>
          <p>
            <Button onClick={this.handleAlertDismiss}>Ok</Button>
          </p>
        </Alert>
      );
    }
  }
}

export default Query;
