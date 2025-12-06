import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIcons from "../contactus/SocailMediaLinks";

const Footer: React.FC = () => {
  return (
    <>
      <section className="w-full bg-[#345570] py-4 px-2 pt-10 pb-10 flex items-center justify-center text-center">
        <div className="flex flex-col sm:flex-row items-center text-white font-bold text-lg sm:text-3xl gap-4">
          <span>Need Help? Chat with Expert Developers!</span>
          <a
            href="https://wa.me/+916376228917"
            aria-label="Chat on WhatsApp with Nexify Digital expert developers"
            className="px-6 py-2 bg-white text-[#345570] rounded-full hover:scale-105 shadow transition font-bold"
          >
            WHATSAPP
          </a>
        </div>
      </section>

      <footer aria-label="Nexify Digital footer section" className="w-full bg-[#345570] text-white py-14 px-4 md:px-14 flex flex-col md:flex-row justify-between items-start text-sm border-t border-[#d5d7d2] gap-10">
        
        {/* Company Info */}
        <div className="md:w-1/4">
          <h1 className="text-5xl md:text-3xl lg:text-4xl font-bold">Sundar Group</h1>
          
          <p className="text-md py-4">
            With 5+ years of experience and 100+ clients, Sundar Group has helped businesses and professionals scale through high-quality web, software, and digital solutions.

          </p>
        </div>

        {/* Useful Links */}
        <div className="md:w-1/4">
          <h1 className="font-bold mb-3 text-2xl sm:text-3xl">Useful Links</h1>
          <ul className="text-md space-y-2">
            <li>
              <Link to="/about-us" aria-label="Know more about Nexify Digital" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link aria-label="Explore Nexify Digital services" to="/services" className="hover:underline">Divisions</Link>
            </li>
            <li>
              <Link to="/career" aria-label="Explore career opportunities at Nexify Digital" className="hover:underline">Career</Link>
            </li>
            <li>
              <Link to="/blogs" aria-label="Read the latest blogs and insights from Nexify Digital" className="hover:underline">blogs</Link>
            </li>
            <li>
              <Link to="/contact-us" aria-label="Contact Nexify Digital team" className="hover:underline">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Our Divisions */}
        <div className="md:w-1/4">
          <h1 className="font-bold mb-3 text-2xl sm:text-3xl">Our Divisions</h1>
          <ul className="text-md space-y-2">
            <li className="hover:underline"><Link aria-label="Website development services by Nexify Digital" to='/services/website_development'>Sundar Print</Link></li>
            <li className="hover:underline"><Link aria-label="Mobile app development services by Nexify Digital" to='/services/app_development'>Sundar Developers</Link></li>
            <li className="hover:underline"><Link  aria-label="Custom software development by Nexify Digital" to='/services/software_development'>Sundar Resort</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:w-1/4">
          <h1 className="font-bold mb-3 text-2xl sm:text-3xl">Contact</h1>
          <div className="text-md space-y-2">
            <div>Aggarwal City Square, 111, Mangalam Place, Sector 3, Rohini, New Delhi, Delhi 110085</div>
            <div>
              <a href="tel:+916376228917" className="hover:underline">+91 000-000-000</a>

            </div>
            <div>
              <a href="mailto:nexifydigital78@gmail.com" className="hover:underline">
                sundargroup@gmail.com
              </a>
              
            </div>
            <div className="py-5">
            <SocialMediaIcons />
          </div>
          </div>
        </div>
      </footer>

      <hr className="text-white" />
      <div className="font-bold text-xl py-8 text-center bg-[#345570] text-white px-2 border-t border-[#12130f]">
        © 2025 Sundar Group. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;