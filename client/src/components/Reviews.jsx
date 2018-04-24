import React from 'react';
import StarRating from 'react-star-ratings';

class Reviews extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div>
          <StarRating 
          starDimension="10px" 
          starSpacing="1px" 
          starRatedColor="rgb(0,132,137)" 
          name="listing-rating" 
          rating={this.props.data.review_rating} 
          /> <small>{this.props.data.reviews}</small>
      </div>
    )
  }
}

export default Reviews;