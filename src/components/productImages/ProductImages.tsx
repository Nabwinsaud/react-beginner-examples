import { useState } from "react";

export const ProductList = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.pexels.com/photos/5614135/pexels-photo-5614135.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5698417/pexels-photo-5698417.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3401402/pexels-photo-3401402.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const onClickNext = () => {
    setCurrentImageIndex((nextIndex) =>
      nextIndex === images.length - 1 ? 0 : nextIndex + 1
    );
    // setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };
  const onClickPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
    // setCurrentImageIndex((currentImageIndex - 1) % images.length);
  };

  return (
    <div className="flex flex-col">
      <img
        src={images[currentImageIndex]}
        alt="Product"
        className="rounded-md w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] object-cover"
      />
      <div className="w-full my-2 text-white  flex items-center justify-between">
        <button
          className="bg-black active:offset-1 active:ring-offset-blue-600  py-1 px-4 rounded-md uppercase"
          onClick={onClickPrev}
        >
          Prev
        </button>
        <button
          className="bg-indigo-600 py-1 px-4 rounded-md uppercase"
          onClick={onClickNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
