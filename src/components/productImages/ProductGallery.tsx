import { useState } from "react";

interface ProductImage {
  id: string;
  url: string;
}

export function ProductGallery() {
  const [selectedImg, setSelectedImg] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number | string>(0);
  const images: ProductImage[] = [
    {
      id: "0",
      url: "https://images.pexels.com/photos/3401402/pexels-photo-3401402.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "1",
      url: "https://images.pexels.com/photos/5698417/pexels-photo-5698417.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "2",
      url: "https://images.pexels.com/photos/5614135/pexels-photo-5614135.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const randomImageIndex = Math.floor(Math.random() * images.length);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-[500px] h-auto items-center justify-center py-2">
        <img
          className="w-[350px] rounded-sm overflow-hidden h-[350px] object-cover"
          src={selectedImg || images[0].url}
        />
      </div>
      <div className="flex space-x-2">
        {images.map((image: ProductImage, index: number) => (
          <img
            key={image.id}
            // onClick={() => setSelectedImg(image.url) }
            onClick={() => {
              const findImageId = images.find(
                (image) => Number(image.id) === index
              );
              setCurrentIndex(findImageId?.id as string);
              setSelectedImg(image.url);
            }}
            src={image.url}
            className={`
            ${
              parseInt(currentIndex as string, 10) === index
                ? "border-blue-600 border-2"
                : ""
            }
             w-[90px] rounded-md hover:cursor-pointer h-[70px] object-cover`}
          />
        ))}
      </div>
    </div>
  );
}
