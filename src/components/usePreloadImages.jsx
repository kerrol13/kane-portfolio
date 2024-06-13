import { useState, useEffect } from 'react';

const usePreloadImages = (imageUrls) => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const imagesArray = [];

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageUrls.length) {
          setAllImagesLoaded(true);
        }
      };
      imagesArray.push(img);
    });

    return () => {
      // Cleanup: stop loading images if the component unmounts
      imagesArray.forEach(img => img.src = '');
    };
  }, [imageUrls]);

  return allImagesLoaded;
};

export default usePreloadImages;
