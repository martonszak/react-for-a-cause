import ImageGallery from "react-image-gallery";

import tricky from "../public/tricky.jpg"
import cat_9 from "../public/9.jpg";
import cat_10 from "../public/10.jpg";
import cat_12 from "../public/12.jpg";
import cat_14 from "../public/14.jpg";
import cat_15 from "../public/15.jpg";
import cat_16 from "../public/16.jpg";
import cat_17 from "../public/17.jpg";

const images = [
  { original: tricky.src },
  { original: cat_9.src },
  { original: cat_10.src },
  { original: cat_12.src },
  { original: cat_14.src },
  { original: cat_15.src },
  { original: cat_16.src },
  { original: cat_17.src },
];

export default function Gallery() {
  return (
    <div style={{ position: "relative" }}>
      <ImageGallery
        Layout={"fill"}
        infinite
        autoPlay={true}
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={false}
        items={images}
        slideInterval={4000}
      />
    </div>
  );
}
