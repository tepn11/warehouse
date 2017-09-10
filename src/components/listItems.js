import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import '../App.css';


class ListItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listItems = this.props.listItems.map((item, i) =>
      <ListGroupItem>{item}</ListGroupItem>
    );
    return (
      <div >
        <ListGroup>
          {listItems}
        </ListGroup>
      </div>
    );
  }
}

export default ListItems;
