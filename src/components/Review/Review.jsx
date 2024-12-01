import React from "react";
import "./Review.css";

const Reviews = () => {
  const reviewData = [
    {
      name: "John Doe",
      rating: 5,
      photo: "/image/banner-1.jpg",
      comment: "Excellent service! My car looks brand new after the repair.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      photo: "/image/banner-2.jpeg",
      comment: "Great customer support and professional work. Highly recommend!",
    },
    {
      name: "Mike Johnson",
      rating: 4.5,
      photo: "/image/banner-3.jpeg",
      comment: "Quick and efficient service. Prices are reasonable too.",
    },
    {
      name: "Emily Davis",
      rating: 5,
      photo: "/image/banner.jpeg",
      comment: "Loved the attention to detail! My car is running perfectly.",
    },
  ];

  return (
    <div className="reviews-container">
      <h2 className="reviews-heading text-primary">Customer Reviews</h2>
      <div className="reviews-grid">
        {reviewData.map((review, index) => (
          <div key={index} className="review-card">
            <img
              src={review.photo}
              alt={review.name}
              className="review-photo"
            />
            <h3 className="review-name">{review.name}</h3>
            <p className="review-rating">
              {"⭐".repeat(Math.floor(review.rating))}{" "}
              {review.rating % 1 ? "⭐" : ""}
            </p>
            <p className="review-comment">"{review.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
