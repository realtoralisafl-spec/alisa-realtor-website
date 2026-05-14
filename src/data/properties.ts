export interface Property {
  id: number
  title: string
  address: string
  city: string
  price: number
  beds: number
  baths: number
  sqft: number
  type: 'Single Family' | 'Townhouse' | 'Condo' | 'Land' | 'New Construction'
  status: 'For Sale' | 'Pending' | 'Sold'
  image: string
  featured: boolean
  yearBuilt: number
  description: string
}

export const properties: Property[] = [
  {
    id: 1,
    title: 'Beautiful Ranch Home in Horse Country',
    address: '4521 SE 42nd Terrace',
    city: 'Ocala',
    price: 375000,
    beds: 4,
    baths: 3,
    sqft: 2400,
    type: 'Single Family',
    status: 'For Sale',
    image: '/images/property-1.jpg',
    featured: true,
    yearBuilt: 2019,
    description: 'Stunning ranch-style home featuring an open floor plan, gourmet kitchen, and spacious backyard. Located in the heart of Ocala horse country with easy access to trails and the WEC.',
  },
  {
    id: 2,
    title: 'New Construction in Gated Community',
    address: '1205 NW 55th Avenue',
    city: 'Ocala',
    price: 445000,
    beds: 4,
    baths: 2.5,
    sqft: 2800,
    type: 'New Construction',
    status: 'For Sale',
    image: '/images/property-2.jpeg',
    featured: true,
    yearBuilt: 2026,
    description: 'Brand new construction in a premier gated community. Features include quartz countertops, luxury vinyl plank flooring, covered lanai, and a 3-car garage.',
  },
  {
    id: 3,
    title: 'Cozy Starter Home Near Downtown',
    address: '812 SE 3rd Street',
    city: 'Ocala',
    price: 225000,
    beds: 3,
    baths: 2,
    sqft: 1450,
    type: 'Single Family',
    status: 'For Sale',
    image: '/images/property-3.jpg',
    featured: false,
    yearBuilt: 2005,
    description: 'Perfect starter home just minutes from downtown Ocala. Updated kitchen, new roof, and a charming fenced yard. Great for first-time homebuyers.',
  },
  {
    id: 4,
    title: 'Spacious Family Home in Belleview',
    address: '3340 SE 98th Place',
    city: 'Belleview',
    price: 310000,
    beds: 4,
    baths: 2,
    sqft: 2100,
    type: 'Single Family',
    status: 'For Sale',
    image: '/images/property-4.webp',
    featured: false,
    yearBuilt: 2015,
    description: 'Family-friendly home in a quiet Belleview neighborhood. Open-concept living, split floor plan, and a screened-in pool. Community playground and walking paths.',
  },
  {
    id: 5,
    title: 'Riverfront Property in Dunnellon',
    address: '19855 SW 85th Place Road',
    city: 'Dunnellon',
    price: 520000,
    beds: 3,
    baths: 2,
    sqft: 1950,
    type: 'Single Family',
    status: 'For Sale',
    image: '/images/property-5.webp',
    featured: true,
    yearBuilt: 2010,
    description: 'Rare riverfront home with private dock on the Rainbow River. Enjoy crystal-clear waters right from your backyard. Updated interior with modern finishes.',
  },
  {
    id: 6,
    title: '55+ Active Adult Villa',
    address: '9910 SW 62nd Terrace Road',
    city: 'Ocala',
    price: 265000,
    beds: 2,
    baths: 2,
    sqft: 1600,
    type: 'Condo',
    status: 'For Sale',
    image: '/images/property-6.jpg',
    featured: false,
    yearBuilt: 2020,
    description: 'Move-in ready villa in a popular 55+ community. Resort-style amenities including pool, fitness center, and golf. Low-maintenance lifestyle at its best.',
  },
  {
    id: 7,
    title: 'Build-Ready Lot in SW Ocala',
    address: 'SW 38th Avenue',
    city: 'Ocala',
    price: 75000,
    beds: 0,
    baths: 0,
    sqft: 0,
    type: 'Land',
    status: 'For Sale',
    image: '/images/property-7.jpg',
    featured: false,
    yearBuilt: 0,
    description: '2.5-acre lot cleared and ready to build. Zoned residential, utilities available at street. Perfect for your custom dream home in growing SW Ocala.',
  },
  {
    id: 8,
    title: 'Modern Townhouse in Summerfield',
    address: '15240 SE 78th Terrace',
    city: 'Summerfield',
    price: 195000,
    beds: 3,
    baths: 2.5,
    sqft: 1700,
    type: 'Townhouse',
    status: 'For Sale',
    image: '/images/property-8.jpg',
    featured: false,
    yearBuilt: 2022,
    description: 'Stylish townhome with modern finishes, one-car garage, and community pool access. Minutes from shopping, dining, and healthcare.',
  },
]

export const cities = ['Ocala', 'Summerfield', 'Belleview', 'Dunnellon', 'Beverly Hills']
export const propertyTypes = ['Single Family', 'Townhouse', 'Condo', 'Land', 'New Construction']
export const priceRanges = [
  { label: 'Any Price', min: 0, max: Infinity },
  { label: 'Under $200K', min: 0, max: 200000 },
  { label: '$200K - $300K', min: 200000, max: 300000 },
  { label: '$300K - $400K', min: 300000, max: 400000 },
  { label: '$400K - $500K', min: 400000, max: 500000 },
  { label: '$500K+', min: 500000, max: Infinity },
]
export const bedOptions = ['Any', '1+', '2+', '3+', '4+']
