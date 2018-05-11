import React from 'react';
import './styles/GuestList.css';

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
    const hoverClose = this.state.isHovered ? 'onhover':'Close';
    if (this.props.isClicked) {
      return (
        <div>
          <div className='GuestList'>
            <div>Adults<img className='plus button'src='https://image.flaticon.com/icons/svg/179/179402.svg' onClick={this.addAdult}></img><span className='guests button'>{this.state.adults}</span><img src='https://image.flaticon.com/icons/svg/179/179396.svg' className='minus button' onClick={this.subtractAdult}></img></div>
            <div>Children<img className='plus button'src='https://image.flaticon.com/icons/svg/179/179402.svg' onClick={this.addChild}></img><span className='guests button'>{this.state.children}</span><img src='https://image.flaticon.com/icons/svg/179/179396.svg' className='minus button' onClick={this.subtractChild}></img></div>
            <div>Infants<img className='plus button'src='https://image.flaticon.com/icons/svg/179/179402.svg' onClick={this.addInfant}></img><span className='guests button'>{this.state.infants}</span><img src='https://image.flaticon.com/icons/svg/179/179396.svg' className='minus button' onClick={this.subtractInfant}></img></div>
            <div><span className={hoverClose} onMouseEnter={this.hover.bind(this)} onMouseLeave={this.hover.bind(this)} onClick={this.onClick.bind(this)}>Close</span></div>
          </div>
          <br></br>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default GuestList;