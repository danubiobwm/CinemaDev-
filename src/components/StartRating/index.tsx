import React, {useState, useEffect} from 'react';
import {onChange} from 'react-native-reanimated';
import StarRating from 'react-native-star-rating';

type RatingsProps = {
  stars?: number;
  onChange: (stars: number) => 0;
  [key: string]: any;
};



export default function Ratings({
  stars,
  onChange,
  ...props
}: RatingsProps): JSX.Element {

  return (
    <StarRating
      maxStars={5}
      starSize={30}
      animation="tada"
      rating={stars || 0}
      selectedStar={onChange}
      fullStarColor="#ff7b00"
      {...props}
    />
  );
}
