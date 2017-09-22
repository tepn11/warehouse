import React, { Component } from 'react';

class RowItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = this.props.items;
    let row = <td></td>;
    if(items){
      if(typeof items === 'object'){
        row = items.map((val,i) => 
            <td key={this.props.rowNum + i}>{val}</td>
        )
      } else if(typeof items === 'string'){
        row = <td colSpan='5' className='row-actions'>{items}</td>
      }
    }
    return (
      <tr>{row}</tr>
    )
  }
}

export default RowItem;