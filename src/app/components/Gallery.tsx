import img1 from "figma:asset/de4cfef857a482a0de1cca3d0c727872b4a87b2e.png";
import img2 from "figma:asset/3bc2c1c8d0b22e815650c8bfb6c980e446bd8fac.png";
import img3 from "figma:asset/b5ba2157b6e5f339a7da6a0881dbcec1fadce6c4.png";
import { useState } from "react";
import { X } from "lucide-react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: img1,
      alt: "RK World Tower - Exterior View at Dusk",
      title: "Exterior View at Dusk",
    },
    {
      src: img2,
      alt: "RK World Tower - Full Building View",
      title: "Full Building View",
    },
    {
      src: img3,
      alt: "RK World Tower - Architectural Details",
      title: "Architectural Details",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-blue-900">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore the stunning architecture and design of RK World Tower
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
