import React, { Component } from 'react';

class RowItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = this.props.items;
    let row = <td></td>;
    if(items){
      row = items.map((val,i) => 
        <td key={this.props.rowNum + i}>{val}</td>
      )
    }
    return (
      <tr>{row}</tr>
    )
  }
}

export default RowItem;