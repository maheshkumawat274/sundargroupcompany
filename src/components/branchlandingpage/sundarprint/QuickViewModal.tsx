import { useState, useEffect } from "react";
import type { Product } from "./types";
import { X, ChevronLeft, ChevronRight} from "lucide-react";
import { Link } from "react-router-dom";

const QuickViewModal = ({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) => {
  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center px-3 sm:px-4 py-4"
      onClick={onClose}
    >
      {/* MODAL - More compact */}
      <div 
        className="bg-white rounded-2xl w-full max-w-4xl h-[85vh] md:h-[80vh] relative overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all duration-200 backdrop-blur-sm"
        >
          <X size={16} />
        </button>

        <div className="flex flex-col lg:flex-row h-full">

          {/* IMAGE SECTION - Takes more space */}
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center h-[40vh] sm:h-[45vh] lg:h-full lg:w-3/5 p-4">
            {/* IMAGE CONTAINER */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={images[current]}
                alt={product.name}
                className="max-w-[90%] max-h-[90%] object-contain transition-opacity duration-300"
              />
            </div>

            {/* IMAGE NAVIGATION BUTTONS - OUTSIDE IMAGE ON SIDES */}
            {images.length > 1 && (
              <>
                {/* LEFT BUTTON - COMPLETELY OUTSIDE */}
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm text-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-105 transition-all duration-200 border border-gray-300 z-20"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* RIGHT BUTTON - COMPLETELY OUTSIDE */}
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm text-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:scale-105 transition-all duration-200 border border-gray-300 z-20"
                >
                  <ChevronRight size={20} />
                </button>

                {/* IMAGE COUNTER */}
                <div className="absolute top-2 left-2 z-20 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  {current + 1} / {images.length}
                </div>

                {/* DOTS FOR MOBILE */}
                {isMobile && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          current === i 
                            ? "bg-rose-600 w-4" 
                            : "bg-gray-400 hover:bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* CONTENT SECTION - Minimal content */}
          <div className="flex-1 h-full overflow-y-auto p-5 sm:p-6 flex flex-col justify-center items-center text-center">
            
            {/* ONLY NAME, CATEGORY, DESCRIPTION, LOGIN BUTTON */}
            
            {/* CATEGORY */}
            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                {product.category}
              </span>
            </div>

            {/* PRODUCT NAME */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 px-4">
              {product.name}
            </h2>

            {/* PRODUCT DESCRIPTION */}
            <div className="mb-6 max-w-md">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-4">
                Premium printed saree with export-quality fabric, elegant contemporary designs, 
                perfect for retail businesses. Custom packaging available for bulk orders.
              </p>
            </div>

            {/* LOGIN BUTTON - CENTERED */}
            <div className="w-full max-w-xs mx-auto">
              <button className="w-full py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                <Link to="/branch/sundar-print/wholesaler/register">
                LOGIN TO VIEW WHOLESALE PRICES</Link>
              </button>
              
              {/* SMALL INFO TEXT */}
              <p className="text-xs text-gray-500 mt-3">
                Verified business account required
              </p>
            </div>

            {/* CLOSE TEXT - Minimal */}
            <div className="mt-8">
              <button 
                onClick={onClose}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors underline underline-offset-2"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;