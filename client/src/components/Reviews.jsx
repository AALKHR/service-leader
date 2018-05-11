import React from 'react';
import StarRating from 'react-star-ratings';

const Reviews = ({data}) => (
  <div>
      <StarRating 
      starDimension="10px" 
      starSpacing="1px" 
      starRatedColor="rgb(0,132,137)" 
      name="listing-rating" 
      rating={data.review_rating} 
      /> <small>{data.reviews}</small>
  </div>
);

export default Reviews;