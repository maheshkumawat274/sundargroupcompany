
export interface Amenity {
  icon: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  amenities: Amenity[];
  features?: string[];
}

export interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
}
