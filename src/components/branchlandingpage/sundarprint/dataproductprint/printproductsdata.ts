import type { Category, Product } from "../types";

export const categories: (Category & { slug: string })[]= [
  { id: '1', name: 'Casual wear', slug: 'casual-wear', image: 'https://peachmode.com/cdn/shop/products/chiku-casual-wear-printed-georgette-saree-peachmode-1.jpg?v=1669018153&width=2000' },
  { id: '2', name: 'Daily wear', slug: 'daily-wear', image: 'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg' ,},
  { id: '3', name: 'Party wear', slug: 'party-wear', image: 'https://desilooklifestyle.com/cdn/shop/files/WhatsAppImage2023-05-10at5.39.57PM.jpg?v=1715948521' },
  { id: '4', name: 'Bandhani wear', slug: 'bandhani-wear', image: 'https://aesha.in/images/items/item1653378547618.jpg' }
];

// Brasso Sarees (Casual Wear)
export const brassoSarees: Product[] = [
  { 
    id: 'b1', 
    name: 'Royal Brasso Silk', 
    price: 2499, 
    originalPrice: 3999, 
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg'
    ], 
    category: 'Brasso Saree',
    mainCategory: 'Casual wear',
    mainCategorySlug: 'casual-wear'
  },
  { 
    id: 'b2', 
    name: 'Golden Brasso Print', 
    price: 2799, 
    originalPrice: 4299, 
    image: 'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Brasso Saree',
    mainCategory: 'Casual wear',
    mainCategorySlug: 'casual-wear'
  },
  { 
    id: 'b3', 
    name: 'Elegant Brasso Design', 
    price: 3199, 
    originalPrice: 4799, 
    image: 'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Brasso Saree',
    mainCategory: 'Casual wear',
    mainCategorySlug: 'casual-wear'
  },
  { 
    id: 'b4', 
    name: 'Classic Brasso Weave', 
    price: 2999, 
    originalPrice: 4499, 
    image: 'https://cdn.sareeka.com/image/cache/data2023/print-and-weaving-work-brasso-classic-sari-in-brown-for-festival-273855-1000x1375.jpg',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Brasso Saree',
    mainCategory: 'Casual wear',
    mainCategorySlug: 'casual-wear'
  },
  { 
    id: 'b5', 
    name: 'Premium Brasso Art', 
    price: 3499, 
    originalPrice: 5199, 
    image: 'https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/8/5842sr03-331003.jpg',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Brasso Saree',
    mainCategory: 'Casual wear',
    mainCategorySlug: 'casual-wear'
  },
];

// Georgette Sarees (Casual & Daily Wear)
export const georgetteSarees: Product[] = [
  { 
    id: 'g1', 
    name: 'Floral Georgette', 
    price: 1899, 
    originalPrice: 2999, 
    image: 'https://www.vastranand.in/cdn/shop/files/3_07e675ba-d45c-4bb9-a34f-95351321ccfe.jpg?v=1743078595&width=1080',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Georgette Jaquard',
    mainCategory: 'Casual wear',
    mainCategorySlug: 'casual-wear'
  },
  { 
    id: 'g2', 
    name: 'Designer Jaquard', 
    price: 2199, 
    originalPrice: 3499, 
    image: 'https://myfashionroad.com/wp-content/uploads/2025/08/t-and-m-designer-dishita-hits-designs-jacquard-suit-latest-catalogs-9-2025-06-21_14_00_31.jpeg',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Georgette Jaquard',
    mainCategory: 'Casual wear',
    mainCategorySlug: 'casual-wear'
  },
  { 
    id: 'g3', 
    name: 'Elegant Georgette', 
    price: 2499, 
    originalPrice: 3799, 
    image: 'https://clothsvilla.com/cdn/shop/files/green-elegant-georgette-digital-print-blouse-shrug-sharara-set-with-pearl-lace-detailing_2_1024x1024.jpg?v=1757051974',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Georgette Jaquard',
    mainCategory: 'Daily wear',
    mainCategorySlug: 'daily-wear'
  },
  { 
    id: 'g4', 
    name: 'Royal Jaquard Print', 
    price: 2799, 
    originalPrice: 4199, 
    image: 'https://ik.imagekit.io/4sjmoqtje/tr:w-1000,c-at_max/cdn/shop/files/royal-blue-jaquard-silk-saree-with-zari-butti-and-brocade-border-sg292422-6.jpg?v=1746446921',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Georgette Jaquard',
    mainCategory: 'Party wear',
    mainCategorySlug: 'party-wear'
  },
  { 
    id: 'g5', 
    name: 'Classic Georgette Art', 
    price: 1999, 
    originalPrice: 3299, 
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Georgette Jaquard',
    mainCategory: 'Daily wear',
    mainCategorySlug: 'daily-wear'
  },
];

// Weightless Sarees (Casual Wear)
export const weightlessSarees: Product[] = [
  { 
    id: 'w1', 
    name: 'Airy Weightless Silk', 
    price: 1599, 
    originalPrice: 2499, 
    image: 'https://tanhai.in/cdn/shop/files/112_a5285dc3-10d8-4a34-9a4e-82f69840d36a_1800x1800.jpg?v=1747910565',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Weightless Saree',
    mainCategory: 'Casual wear',
    mainCategorySlug: 'casual-wear'
  },
  { 
    id: 'w2', 
    name: 'Light Floral Print', 
    price: 1799, 
    originalPrice: 2799, 
    image: 'https://www.southindiaeshop.com/cdn/shop/files/light-pink-digital-floral-print-with-embellished-work-organza-saree-189532.webp?v=1751013607',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Weightless Saree',
    mainCategory: 'Casual wear',
    mainCategorySlug: 'casual-wear'
  },
  { 
    id: 'w3', 
    name: 'Soft Drape Design', 
    price: 1999, 
    originalPrice: 3099, 
    image: 'https://milandesign.in/cdn/shop/files/DSC_1483_9755741c-2873-4258-96f5-bfb51d9dc73f.jpg?v=1745674041',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Weightless Saree',
    mainCategory: 'Casual wear',
    mainCategorySlug: 'casual-wear'
  },
  { 
    id: 'w4', 
    name: 'Feather Light Saree', 
    price: 2199, 
    originalPrice: 3399, 
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Weightless Saree',
    mainCategory: 'Casual wear',
    mainCategorySlug: 'casual-wear'
  },
  { 
    id: 'w5', 
    name: 'Breezy Comfort Wear', 
    price: 1899, 
    originalPrice: 2999, 
    image: 'https://sukritistore.com/cdn/shop/files/WhatsAppImage2024-05-15at8.38.24PM.jpg?v=1715944108',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Weightless Saree',
    mainCategory: 'Casual wear',
    mainCategorySlug: 'casual-wear'
  },
];

// Fancy Print Sarees (Daily Wear)
export const fancyPrintSarees: Product[] = [
  { 
    id: 'f1', 
    name: 'Abstract Fancy Print', 
    price: 2299, 
    originalPrice: 3599, 
    image: 'https://cdn.sareeka.com/image/cache/data2019/abstract-print-fancy-fabric-blue-printed-saree-131446-1000x1375.jpg',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Fancy Print',
    mainCategory: 'Daily wear',
    mainCategorySlug: 'daily-wear'
  },
  { 
    id: 'f2', 
    name: 'Modern Art Print', 
    price: 2499, 
    originalPrice: 3899, 
    image: 'https://www.jollysilks.com/pub/media/catalog/product/s/t/std801002545_01.jpg',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Fancy Print',
    mainCategory: 'Daily wear',
    mainCategorySlug: 'daily-wear'
  },
  { 
    id: 'f3', 
    name: 'Digital Fancy Design', 
    price: 2699, 
    originalPrice: 4199, 
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Fancy Print',
    mainCategory: 'Daily wear',
    mainCategorySlug: 'daily-wear'
  },
  { 
    id: 'f4', 
    name: 'Exclusive Print Art', 
    price: 2899, 
    originalPrice: 4499, 
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Fancy Print',
    mainCategory: 'Daily wear',
    mainCategorySlug: 'daily-wear'
  },
  { 
    id: 'f5', 
    name: 'Premium Fancy Work', 
    price: 3099, 
    originalPrice: 4799, 
    image: 'https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/8/5842sr03-331003.jpg',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Fancy Print',
    mainCategory: 'Daily wear',
    mainCategorySlug: 'daily-wear'
  },
];

// Swarovski Sarees (Party Wear)
export const swarovskiSarees: Product[] = [
  { 
    id: 's1', 
    name: 'Crystal Swarovski Work', 
    price: 4999, 
    originalPrice: 7999, 
    image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/sari/j/l/q/free-40x40-chiffone-musterd-piya-designer-unstitched-original-imahgycvpwyemggb.jpeg?q=90',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Swarovski Work',
    mainCategory: 'Party wear',
    mainCategorySlug: 'party-wear'
  },
  { 
    id: 's2', 
    name: 'Diamond Studded Design', 
    price: 5499, 
    originalPrice: 8499, 
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Swarovski Work',
    mainCategory: 'Party wear',
    mainCategorySlug: 'party-wear'
  },
  { 
    id: 's3', 
    name: 'Royal Stone Work', 
    price: 5999, 
    originalPrice: 8999, 
    image: 'https://roopkalasarees.com/cdn/shop/files/1J8A9812.jpg?v=1764843197&width=1946',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Swarovski Work',
    mainCategory: 'Party wear',
    mainCategorySlug: 'party-wear'
  },
  { 
    id: 's4', 
    name: 'Elegant Crystal Art', 
    price: 6499, 
    originalPrice: 9499, 
    image: 'https://resources.indianclothstore.com/productimages/CBS13508012018-Royal-Blue-Georgette-Stone-Work-Saree.jpg',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Swarovski Work',
    mainCategory: 'Party wear',
    mainCategorySlug: 'party-wear'
  },
  { 
    id: 's5', 
    name: 'Premium Swarovski Silk', 
    price: 6999, 
    originalPrice: 9999, 
    image: 'https://www.ikonikbez.com/cdn/shop/files/7_17d851b8-b179-4fe3-b232-93fa1b91308d_535x.png?v=1718011342',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Swarovski Work',
    mainCategory: 'Party wear',
    mainCategorySlug: 'party-wear'
  },
  { 
    id: 's6', 
    name: 'Luxury Stone Design', 
    price: 7499, 
    originalPrice: 10999, 
    image: 'https://static.wixstatic.com/media/faf1ba_db9d179717444b4f8bd441176f376c92~mv2.jpg/v1/fill/w_526,h_705,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/faf1ba_db9d179717444b4f8bd441176f376c92~mv2.jpg',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Swarovski Work',
    mainCategory: 'Party wear',
    mainCategorySlug: 'party-wear'
  },
  { 
    id: 's7', 
    name: 'Exclusive Crystal Work', 
    price: 7999, 
    originalPrice: 11499, 
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Swarovski Work',
    mainCategory: 'Party wear',
    mainCategorySlug: 'party-wear'
  },
  { 
    id: 's8', 
    name: 'Heritage Swarovski Art', 
    price: 8499, 
    originalPrice: 11999, 
    image: 'https://static.wixstatic.com/media/faf1ba_db9d179717444b4f8bd441176f376c92~mv2.jpg/v1/fill/w_526,h_705,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/faf1ba_db9d179717444b4f8bd441176f376c92~mv2.jpg',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Swarovski Work',
    mainCategory: 'Party wear',
    mainCategorySlug: 'party-wear'
  },
];

// Chiffon Sarees (Daily Wear)
export const chiffonSarees: Product[] = [
  { 
    id: 'c1', 
    name: '40x40 Pure Chiffon', 
    price: 1999, 
    originalPrice: 3199, 
    image: 'https://rukminim2.flixcart.com/image/480/640/xif0q/sari/j/l/q/free-40x40-chiffone-musterd-piya-designer-unstitched-original-imahgycvpwyemggb.jpeg?q=90',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Chiffon Saree',
    mainCategory: 'Daily wear',
    mainCategorySlug: 'daily-wear'
  },
  { 
    id: 'c2', 
    name: 'Sheer Chiffon Print', 
    price: 2199, 
    originalPrice: 3499, 
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Chiffon Saree',
    mainCategory: 'Daily wear',
    mainCategorySlug: 'daily-wear'
  },
  { 
    id: 'c3', 
    name: 'Elegant Chiffon Drape', 
    price: 2399, 
    originalPrice: 3799, 
    image: 'https://roopkalasarees.com/cdn/shop/files/1J8A9812.jpg?v=1764843197&width=1946',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Chiffon Saree',
    mainCategory: 'Daily wear',
    mainCategorySlug: 'daily-wear'
  },
  { 
    id: 'c4', 
    name: 'Flowy Chiffon Design', 
    price: 2599, 
    originalPrice: 4099, 
    image: 'https://static.wixstatic.com/media/faf1ba_db9d179717444b4f8bd441176f376c92~mv2.jpg/v1/fill/w_526,h_705,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/faf1ba_db9d179717444b4f8bd441176f376c92~mv2.jpg',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Chiffon Saree',
    mainCategory: 'Daily wear',
    mainCategorySlug: 'daily-wear'
  },
  { 
    id: 'c5', 
    name: 'Premium Chiffon Silk', 
    price: 2799, 
    originalPrice: 4399, 
    image: 'https://static.wixstatic.com/media/faf1ba_db9d179717444b4f8bd441176f376c92~mv2.jpg/v1/fill/w_526,h_705,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/faf1ba_db9d179717444b4f8bd441176f376c92~mv2.jpg',
    images: [
      'https://image.suratwholesaleshop.com/data/2024y/March/48199/Red-Georgette-Party%20Wear-Jacquard%20Weaving-Saree-43534.jpg',
      'https://www.vishalprints.in/cdn/shop/files/YATRA-52283-01_f46a859f-0a8f-4989-9449-a75397c066ab_600x.jpg?v=1732873261',
      'https://cdn.sareeka.com/image/cache/data2021/fancy-pink-brasso-designer-saree-182728-1000x1375.jpg' 
    ], 
    category: 'Chiffon Saree',
    mainCategory: 'Daily wear',
    mainCategorySlug: 'daily-wear'
  },
];

export const allProducts: Product[] = [
  ...brassoSarees,
  ...georgetteSarees,
  ...weightlessSarees,
  ...fancyPrintSarees,
  ...swarovskiSarees,
  ...chiffonSarees,
];

// Sub-categories mapping
export const subCategories = {
  'casual-wear': ['Brasso Saree', 'Georgette Jaquard', 'Weightless Saree'],
  'daily-wear': ['Fancy Print', 'Chiffon Saree', 'Georgette Jaquard'],
  'party-wear': ['Swarovski Work', 'Brasso Saree', 'Georgette Jaquard'],
  'bandhani-wear': ['Bandhani Print']
};

// Featured Products
export const featuredProducts: Product[] = [
  brassoSarees[0],
  fancyPrintSarees[0],
  swarovskiSarees[0],
  georgetteSarees[0],
  chiffonSarees[0],
  weightlessSarees[0]
];

// New Arrivals
export const newArrivals: Product[] = [
  brassoSarees[0],
  georgetteSarees[0],
  swarovskiSarees[0],
  fancyPrintSarees[0]
];

// Helper Functions
export const getProductsByCategory = (categorySlug: string): { products: Product[], categoryName: string } => {
  const category = categories.find(c => c.slug === categorySlug);
  if (!category) return { products: [], categoryName: '' };

  const products = allProducts.filter(p => p.category === category.name);
  return { products, categoryName: category.name };
};

export const getProductsByMainCategory = (mainCategorySlug: string): Product[] => {
  return allProducts.filter(product => product.mainCategorySlug === mainCategorySlug);
};

export const getProductsBySubCategory = (mainCategorySlug: string, subCategoryName: string): Product[] => {
  return allProducts.filter(product => 
    product.mainCategorySlug === mainCategorySlug && 
    product.category === subCategoryName
  );
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getSubCategoriesForMainCategory = (mainCategorySlug: string): string[] => {
  return subCategories[mainCategorySlug as keyof typeof subCategories] || [];
};