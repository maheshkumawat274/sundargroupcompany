import React from 'react';
import type { Branch } from '../types';

interface BranchPageLayoutProps {
  branch: Branch;
}

const BranchPageLayout: React.FC<BranchPageLayoutProps> = ({ branch }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="h-96 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${branch.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{branch.name}</h1>
        </div>
      </section>

      {/* Description */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Our Branch</h2>
          <p className="text-lg text-gray-700 whitespace-pre-line">{branch.description}</p>
        </div>
      </section>

      {/* Gallery */}
      {branch.gallery && branch.gallery.length > 0 && (
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {branch.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${branch.name} gallery ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services */}
      {branch.services && branch.services.length > 0 && (
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Services Offered</h2>
          <ul className="max-w-2xl mx-auto space-y-3">
            {branch.services.map((service, index) => (
              <li 
                key={index} 
                className="bg-white p-4 rounded-lg shadow flex items-center"
              >
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-lg text-gray-700">{service}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Contact */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Details</h2>
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex">
            <div className="p-8">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">{branch.address}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">{branch.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BranchPageLayout;