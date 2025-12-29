import { FaWhatsapp, FaInstagram, FaFacebookF, FaPhoneAlt } from "react-icons/fa";

const FloatingSocialIcons = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-30">
      <div className="flex flex-col gap-2 bg-white p-1.5 rounded-l-xl shadow-lg">

        {/* WhatsApp */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-2.5 sm:p-3 rounded-full transition"
        >
          <FaWhatsapp className="text-sm sm:text-base" />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 text-white p-2.5 sm:p-3 rounded-full transition"
        >
          <FaInstagram className="text-sm sm:text-base" />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 sm:p-3 rounded-full transition"
        >
          <FaFacebookF className="text-xs sm:text-sm" />
        </a>

        {/* Call */}
        <a
          href="tel:+919999999999"
          className="bg-gray-800 hover:bg-black text-white p-2.5 sm:p-3 rounded-full transition"
        >
          <FaPhoneAlt className="text-xs sm:text-sm" />
        </a>

      </div>
    </div>
  );
};

export default FloatingSocialIcons;
