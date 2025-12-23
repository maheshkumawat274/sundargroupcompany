import React, { useEffect, useRef, useState } from "react";
// import { GiPalmTree } from "react-icons/gi";
import { FaEye } from "react-icons/fa";

const GallarySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [popupImg, setPopupImg] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const flyingImages = container.querySelectorAll(".fly-thumb");

    const animateImages = () => {
      flyingImages.forEach((img: Element) => {
        const htmlImg = img as HTMLElement;
        const translateX = Math.random() * 200 - 100;
        const translateY = Math.random() * 200 - 100;
        const scale = 0.8 + Math.random() * 0.4;

        htmlImg.style.transition = "transform 8s ease-in-out";
        htmlImg.style.transform = `translate3d(${translateX}px, ${translateY}px, 0px) scale(${scale})`;
      });
    };

    animateImages();
    const intervalId = setInterval(animateImages, 8000);
    return () => clearInterval(intervalId);
  }, []);

  const openImagePopup = (img: string) => {
    setPopupImg(img);
  };

  const closeImagePopup = () => {
    setPopupImg(null);
  };

  return (
    <section className="w-full py-12">
      <div className="text-center ">
        <h2 className="text-4xl font-bold">Gallary</h2>
      </div>
      <div className="relative bg-white flex justify-center pt-8 overflow-hidden">
      {/* LEFT BOTTOM IMAGE */}
      <img src="/imgs/element-9.png" className="absolute bottom-80 text-gray-200 md:bottom-0 left-0 w-80 h-100 opacity-80"/>
      <img src="/imgs/element-9.png" className="absolute bottom-80 text-gray-200 md:bottom-0 right-0 w-40 h-[80vh] opacity-80"/>
      {/* <GiPalmTree className="absolute bottom-80 text-gray-200 md:bottom-0 left-0 w-80 h-80 opacity-80" />
      <GiPalmTree className="absolute bottom-80 text-gray-200 md:bottom-0 right-0 w-40 h-40 opacity-80" /> */}

      {/* FLYING IMAGES */}
      <div
        className="fly-image_wrap absolute bottom-4 right-0 w-64 h-64"
        ref={containerRef}
      >
        <img
          className="fly-thumb"
          src="/imgs/flyimg6.png"
          alt="flying decoration"
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            opacity: 0.7,
            zIndex: 1,
            width: "40px",
            height: "40px",
          }}
        />
        <img
          className="fly-thumb"
          src="/imgs/flyimg4.png"
          alt="flying decoration"
          style={{
            position: "absolute",
            top: "40%",
            right: "15%",
            opacity: 0.6,
            zIndex: 1,
            width: "40px",
            height: "40px",
          }}
        />
        <img
          className="fly-thumb"
          src="/imgs/flyimg3.png"
          alt="flying decoration"
          style={{
            position: "absolute",
            bottom: "30%",
            left: "20%",
            opacity: 0.8,
            zIndex: 1,
            width: "40px",
            height: "40px",
          }}
        />
        <img
          className="fly-thumb"
          src="/imgs/flyimg2.png"
          alt="flying decoration"
          style={{
            position: "absolute",
            top: "15%",
            right: "25%",
            opacity: 0.5,
            zIndex: 1,
            width: "40px",
            height: "40px",
          }}
        />
        <img
          className="fly-thumb"
          src="/imgs/flyimg1.png"
          alt="flying decoration"
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            opacity: 0.9,
            zIndex: 1,
            width: "40px",
            height: "40px",
          }}
        />
        <img
          className="fly-thumb"
          src="/imgs/flyimg5.png"
          alt="flying decoration"
          style={{
            position: "absolute",
            top: "60%",
            left: "5%",
            opacity: 0.4,
            zIndex: 1,
            width: "40px",
            height: "40px",
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-4xl px-4 relative z-10">
        {/* LEFT SIDE */}
        <div className="relative rounded-2xl overflow-hidden shadow-md">
          <img
            src="/imgs/WhatsApp Image 2025-09-25 at 23.50.42_ce5041fe.jpg"
            alt="London Big Ben"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <FaEye
              className="text-white text-3xl cursor-pointer"
              onClick={() =>
                openImagePopup("/imgs/WhatsApp Image 2025-09-25 at 23.50.42_ce5041fe.jpg")
              }
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-2">
          {/* Top row */}
          <div className="relative rounded-2xl overflow-hidden shadow-md h-48 group">
            <img
              src="/imgs/WhatsApp Image 2025-09-25 at 23.50.42_95a97045.jpg"
              alt="Thailand Temple"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <FaEye
                className="text-white text-3xl cursor-pointer"
                onClick={() =>
                  openImagePopup("/imgs/WhatsApp Image 2025-09-25 at 23.50.42_95a97045.jpg")
                }
              />
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-md h-48 group">
            <img
              src="/imgs/WhatsApp Image 2025-09-25 at 23.50.43_55337604.jpg"
              alt="Rome Colosseum"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <FaEye
                className="text-white text-3xl cursor-pointer"
                onClick={() =>
                  openImagePopup("/imgs/WhatsApp Image 2025-09-25 at 23.50.43_55337604.jpg")
                }
              />
            </div>
          </div>

          {/* Middle row */}
          <div className="relative col-span-2 rounded-2xl overflow-hidden shadow-md h-48 group">
            <img
              src="/imgs/WhatsApp Image 2025-09-25 at 23.50.44_48e02f37.jpg"
              alt="Maldives Beach"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <FaEye
                className="text-white text-3xl cursor-pointer"
                onClick={() =>
                  openImagePopup("/imgs/WhatsApp Image 2025-09-25 at 23.50.44_48e02f37.jpg")
                }
              />
            </div>
          </div>

          {/* Bottom row */}
          <div className="relative rounded-2xl overflow-hidden shadow-md h-48 group">
            <img
              src="/imgs/Premium-villa-2-image.webp"
              alt="Venice Gondola"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <FaEye
                className="text-white text-3xl cursor-pointer"
                onClick={() =>
                  openImagePopup("/imgs/Premium-villa-2-image.webp")
                }
              />
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-md h-48 group">
            <img
              src="/imgs/Premium-villa-4.webp"
              alt="Thailand Islands"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <FaEye
                className="text-white text-3xl cursor-pointer"
                onClick={() =>
                  openImagePopup("/imgs/Premium-villa-4.webp")
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* POPUP MODAL */}
      {popupImg && (
        <div className="fixed inset-0 px-2 bg-black/80 flex items-center justify-center z-50">
          <img
            src={popupImg}
            alt="popup"
            className="max-h-full max-w-full object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeImagePopup}
          >
            ✕
          </button>
        </div>
      )}
    </div>
    </section>
  );
};

export default GallarySection;