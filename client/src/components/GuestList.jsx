import React from 'react';
import styles from './styles/GuestList.css';

class GuestList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isHovered: false,
      adults: 1,
      children: 0,
      infants: 0
    }

    this.addAdult = this.addAdult.bind(this);
    this.subtractAdult = this.subtractAdult.bind(this);
    this.addChild = this.addChild.bind(this);
    this.subtractChild = this.subtractChild.bind(this);
    this.addInfant = this.addInfant.bind(this);
    this.subtractInfant = this.subtractInfant.bind(this);
  }

  hover() {
    this.setState({isHovered: !this.state.isHovered});
  }

  onClick() {
    this.hover();
    this.props.guestList();
  }

  addAdult() {
    if (this.state.adults < 6) {
      this.props.changeGuests(true, 'adult');
      this.setState({adults: this.state.adults + 1});
    }
  }

  subtractAdult() {
    if (this.state.adults > 1) {
      this.props.changeGuests(false, 'adult');
      this.setState({adults: this.state.adults - 1});
    }
  }

  addChild() {
    if (this.state.children < 6) {
      this.props.changeGuests(true, 'child');
      this.setState({ children: this.state.children + 1 });
    }
  }

  subtractChild() {
    if (this.state.children > 0) {
      this.props.changeGuests(false, 'child');
      this.setState({ children: this.state.children - 1 });
    }
  }

  addInfant() {
    if (this.state.infants < 6) {
      this.setState({ infants: this.state.infants + 1 });
    }
  }

  subtractInfant() {
    if (this.state.infants > 0) {
      this.setState({ infants: this.state.infants - 1 });
    }
  }


  render() {
    const hoverClose = this.state.isHovered ? styles.onhover:styles.Close;
    if (this.props.isClicked) {
      return (
        <div className={styles.GuestList}>
          <div>Adults<button className={styles.button} onClick={this.addAdult}>+</button><span className={styles.button}>&nbsp;{this.state.adults}&nbsp; </span> <button className={styles.button} onClick={this.subtractAdult}>-</button></div>
          <div>Children<button className={styles.button} onClick={this.addChild}>+</button> <span className={styles.button}>&nbsp;{this.state.children}&nbsp; </span> <button className={styles.button} onClick={this.subtractChild}>-</button></div>
          <div>Infants<button className={styles.button} onClick={this.addInfant}>+</button> <span className={styles.button}>&nbsp;{this.state.infants}&nbsp; </span> <button className={styles.button} onClick={this.subtractInfant}>-</button></div>
          <div><span className={hoverClose} onMouseEnter={this.hover.bind(this)} onMouseLeave={this.hover.bind(this)} onClick={this.onClick.bind(this)}>Close</span></div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default GuestList;