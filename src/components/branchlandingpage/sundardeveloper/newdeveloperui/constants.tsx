
export const CONTACT_PHONE = "919876543210";
export const WHATSAPP_LINK = (msg: string) => `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent(msg)}`;
