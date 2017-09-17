import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import '../App.css';
import RowItem from './rowItem'


class ListItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listItemsV2 = '';
    if(this.props.listItems.length > 0) {
      listItemsV2 = this.props.listItems.map((items,x) =>
        <RowItem key={x} items={items} rowNum={x}/>
      );
    }
    return (
      <div >
        <Table responsive>
          <thead>
            <tr>
              <td className='App-table-header'>SKU</td>
              <td className='App-table-header'>Title</td>
              <td className='App-table-header'>id</td>
            </tr>
          </thead>
          <tbody>
            {listItemsV2}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ListItems;
