import React from 'react';

class TotalPrice extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  calculateTotal() {
    let data = this.props.data;
    let newPrice = (this.props.guestsAdult * data.adult_price) + (this.props.guestsChildren * data.child_price);
    return newPrice;
  }

  render() {
    return (
      <div>
        <span>$</span>
        <span style={{fontWeight: "bold"}}>{this.calculateTotal()}</span>
        <span style={{fontSize: "9px", fontWeight: "bold"}}> per night</span>
      </div>
    )
  }
}

export default TotalPrice;