import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getListing(this.props.listing);
  }

  componentDidUpdate() {

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

  render() {
    return (
      <header>
        <div>{this.state.data.adult_price}</div>
        <div>{this.state.data.child_price}</div>
        <div>{this.state.data.cleaning_fee}</div>
      </header>
    )
  }
}

ReactDOM.render(<App listing={5} />, document.getElementById('reservation'));
