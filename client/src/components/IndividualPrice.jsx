import React from 'react';
import styles from './styles/IndividualPrice.css';

class IndividualPrice extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      nights: 0
    }
  }

  totalAmount() {
    let priceTotal = this.props.data.adult_price * this.props.guestsAdult + this.props.data.child_price * this.props.guestsChildren;
    return priceTotal
  }

  render() {
    this.state.nights = this.props.nights;
    let totalAmount = this.totalAmount();
    let serviceFee = Math.round(this.props.data.adult_price * .07);
    if (this.state.nights > 0) {
      return (
        <div>
          <div><span>${totalAmount} x {this.state.nights} nights</span><span className={styles.price}>${this.state.nights * totalAmount}</span></div>
          <hr></hr>
          <div><span>Cleaning fee</span><span className={styles.price}>${this.props.data.cleaning_fee}</span></div>
          <hr></hr>
          <div><span>Service fee</span><span className={styles.price}>${serviceFee}</span></div>
          <hr></hr>
          <div><span>Total</span><span className={styles.price}>${totalAmount + this.props.data.cleaning_fee + serviceFee}</span></div>
          <br></br>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default IndividualPrice;