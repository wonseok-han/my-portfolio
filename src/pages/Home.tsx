import { useEffect, useState } from 'react';

const IMAGES = [
  'https://dummyimage.com/1024x400/000/fff',
  'https://dummyimage.com/1024x400/ddd/000',
  'https://dummyimage.com/1024x400/666/fff',
  'https://dummyimage.com/1024x400/999/fff',
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-full py-16 px-4 sm:px-6 lg:px-8">
        {IMAGES.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`h-full w-full ${
              index === activeIndex
                ? 'opacity-100'
                : 'opacity-0 transition-opacity duration-1000 ease-in-out'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
