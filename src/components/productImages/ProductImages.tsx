import React, { useState } from "react";

const ProductList = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://example.com/product1-1.jpg",
    "https://example.com/product1-2.jpg",
    "https://example.com/product1-3.jpg",
  ];

  const onClickNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const onClickPrev = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <img
        src={images[currentImageIndex]}
        alt="Product"
        style={{
          width: 300,
          height: 300,
          objectFit: "cover",
        }}
      />
      <div>
        <button onClick={onClickPrev}>Prev</button>
        <button onClick={onClickNext}>Next</button>
      </div>
    </div>
  );
};
