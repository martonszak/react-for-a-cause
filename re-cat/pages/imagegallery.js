import ImageGallery from "react-image-gallery";

import cat_1 from "../public/1.png";
import cat_2 from "../public/2.png";
import cat_3 from "../public/3.png";

const images = [
  { original: cat_1.src },
  { original: cat_2.src },
  { original: cat_3.src },
];

export default function Gallery() {
  return (
    <ImageGallery
      infinite
      autoPlay={true}
      showFullscreenButton={false}
      showPlayButton={false}
      showNav={false}
      items={images}
      slideInterval={4000}
    />
  );
}
