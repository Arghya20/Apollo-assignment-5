import { useState } from "react";

const ReviewForm = ({ onSubmitReview }) => {
  const [reviewText, setReviewText] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmitReview(reviewText);
    setReviewText("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <textarea
        placeholder="Write your review here..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      ></textarea>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
