import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.scss';

function StarRating({ numOfStars = 5 }) {
  const [rating, setrating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setrating(index);
  }

  function handleMouseEnter(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(rating);
  }
  console.log({"rating":rating,"hover":hover})
  return (
    <div className="star-rating">
      {[...Array(numOfStars)].map((_, index) => {
        index+=1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            size={40}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
