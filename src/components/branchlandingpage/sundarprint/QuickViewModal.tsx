import { useState } from "react";
import type { Product } from "./types";

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

  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl max-w-4xl w-full h-[80vh] relative overflow-hidden">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <img
              src={images[current]}
              alt={product.name}
              className="w-full h-full object-cover"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full"
                >
                  ‹
                </button>

                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full"
                >
                  ›
                </button>
              </>
            )}
          </div>

          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.category}</p>

            <p className="text-sm text-gray-500">
              Premium printed saree with elegant fabric and export-quality print.
            </p>

            <button className="w-full py-3 bg-rose-600 text-white rounded-lg">
              Login | Register to see wholesale price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
