import img1 from "../../public/images/1.jpg";
import img2 from "../../public/images/2.jpg";
import img3 from "../../public/images/3.jpg";
import img4 from "../../public/images/4.jpg";
import img5 from "../../public/images/5.jpg";
import img6 from "../../public/images/6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  return (
    <section className="overflow-hidden relative w-full h-80 mb-10">
      <div className="absolute flex gap-2 animate-marquee">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-64 h-80 flex-shrink-0 overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {images.map((src, index) => (
          <div
            key={`duplicate-${index}`}
            className="relative w-64 h-80 flex-shrink-0 overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
