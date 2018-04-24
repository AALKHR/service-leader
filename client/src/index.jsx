import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Calendar from './components/Calendar.jsx';
import Guests from './components/Guests.jsx';
import Reviews from './components/Reviews.jsx';
import TotalPrice from './components/TotalPrice.jsx';
import IndividualPrice from './components/IndividualPrice.jsx';
import GuestList from './components/GuestList.jsx'
import styles from './components/styles/index.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: { "booked_dates": [""], "_id": "", "listingId": "", "adult_price": 0, "child_price": 0, "cleaning_fee": 0, "review_rating": 0, "reviews": 0, "discount": false, "__v": 0 },
      guestList: false,
      guestsAdult: 1,
      guestsChildren: 0
    }

  }

  componentDidMount() {
    this.getListing(this.props.listing);
  }

  getListing(listingNumber) {
    let current = this;
    axios.get(`/reservation/${listingNumber}`)
    .then((response) => {
      console.log('Data received:', response.data);
      this.setState({ data: response.data});
    })
    .catch(error => console.log('Error:', error));
  }

  renderGuests() {
    if (this.state.guestList) {
      this.setState({guestList: false});
    } else {
      this.setState({guestList: true});
    }
  }

  changeGuests(boolean, type) {
    if (type === 'child') {
      let currentValue = this.state.guestsChildren;
      if (boolean) {
        this.setState({guestsChildren: currentValue + 1});
      } else {
        this.setState({guestsChildren: currentValue - 1});
      }
    }
    if (type === 'adult') {
      let currentValue = this.state.guestsAdult;
      if (boolean) {
        this.setState({ guestsAdult: currentValue + 1 });
      } else {
        this.setState({ guestsAdult: currentValue - 1 });
      }
    }
  }

  render() {
    let data = this.state.data;
    let adultGuests = this.state.guestsAdult;
    let childGuests = this.state.guestsChildren;
    return (
      <div>
        <TotalPrice data={data} guestsAdult={adultGuests} guestsChildren={childGuests}/>
        <Reviews data={data}/>
        <hr></hr>
        <Calendar />
        <Guests guestList={this.renderGuests.bind(this)} guestsAdult={adultGuests} guestsChildren={childGuests}/>
        <GuestList isClicked={this.state.guestList} guestList={this.renderGuests.bind(this)} changeGuests={this.changeGuests.bind(this)}/>
        <IndividualPrice data={data} guestsAdult={adultGuests} guestsChildren={childGuests}/>
        <button className={styles.Book}>Book</button>
      </div>
    )
  }
}

ReactDOM.render(<App listing={5} />, document.getElementById('reservation'));
