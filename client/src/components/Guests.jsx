import React from 'react';
import styles from './styles/Guests.css';

class Guests extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      totalGuests: 1
    }
  }

  totalGuests() {
    this.state.totalGuests = this.props.guestsAdult + this.props.guestsChildren;
  }

  render() {
    this.totalGuests();
    let plural = (this.state.totalGuests > 1) ? 's':'';
    return (
      <div>
        <small>
          <span>Guests</span>
        </small>
        <div>
          <button className={styles.Guests} onClick={this.props.guestList}><span>{this.state.totalGuests} guest{plural}</span></button>
        </div>
        <br></br>
      </div>
    )
  }
}

export default Guests;