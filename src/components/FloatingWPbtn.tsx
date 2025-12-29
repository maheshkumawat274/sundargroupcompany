import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsappButton = () => {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        left-4 
        bottom-4 
        z-40 
        bg-green-500 
        hover:bg-green-600 
        text-white 
        p-4 
        rounded-full 
        shadow-lg 
        transition
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={26} />
    </a>
  );
};

export default FloatingWhatsappButton;
