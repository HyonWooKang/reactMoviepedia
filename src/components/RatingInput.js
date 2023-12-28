import { useState } from "react";
import Rating from "./Rating";

function RatingInput({ name, value, onChange }) {
  const [rating, setRating] = useState(value);

  const handleSelect = (nextValue) => onChange(name, nextValue);

  const handleMouseOver = () => setRating(value);

  return (
    <Rating
      className="RatingInput"
      value={rating}
      onSelect={handleSelect}
      onHover={setRating}
      onMouseOut={handleMouseOver}
    />
  );
}

export default RatingInput;
