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
    title: 'Spacious Family Home in Ocala',
    address: '8356 SW 59th Terrace',
    city: 'Ocala',
    price: 399900,
    beds: 4,
    baths: 3,
    sqft: 3000,
    type: 'Single Family',
    status: 'For Sale',
    image: '/images/property-1.jpg',
    featured: true,
    yearBuilt: 2015,
    description: 'Beautiful and spacious 4-bedroom home in a highly desirable Ocala neighborhood. Features an open floor plan, large living areas, and a beautiful master suite.',
  },
  {
    id: 2,
    title: 'Charming Ocala Starter Home',
    address: '4515 SE 59th Street',
    city: 'Ocala',
    price: 270000,
    beds: 3,
    baths: 2,
    sqft: 1385,
    type: 'Single Family',
    status: 'For Sale',
    image: '/images/property-2.jpeg',
    featured: true,
    yearBuilt: 2005,
    description: 'A wonderfully maintained 3-bedroom home perfect for first-time buyers or those looking to downsize. Offers a comfortable layout and a cozy backyard.',
  },
  {
    id: 3,
    title: 'Elegant Tavares Residence',
    address: '5128 Grassy Knoll Drive',
    city: 'Tavares',
    price: 425000,
    beds: 5,
    baths: 3.5,
    sqft: 2889,
    type: 'Single Family',
    status: 'For Sale',
    image: '/images/property-3.jpg',
    featured: true,
    yearBuilt: 2018,
    description: 'Stunning 5-bedroom home located in the beautiful city of Tavares. Boasting almost 3,000 square feet of living space, this home features high-end finishes and a massive kitchen.',
  },
  {
    id: 4,
    title: 'Prime 19 Acre Property in Citra',
    address: '000 NW 27th Avenue',
    city: 'Citra',
    price: 665000,
    beds: 0,
    baths: 0,
    sqft: 0,
    type: 'Land',
    status: 'For Sale',
    image: '/images/property-4.webp',
    featured: true,
    yearBuilt: 0,
    description: 'Incredible opportunity to own 19.00 acres of prime Florida land in Citra. Perfect for building your dream equestrian estate or private retreat.',
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
