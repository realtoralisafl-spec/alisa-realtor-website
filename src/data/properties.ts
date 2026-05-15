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
    title: '4BR Family Home in Marion Oaks',
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
    description: 'Beautiful 4-bedroom home in the heart of Marion Oaks. Features an open-concept floor plan, oversized living areas, and a private master suite with tray ceilings.',
  },
  {
    id: 2,
    title: 'Turn-key 3BR Near Downtown Ocala',
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
    description: 'A well-maintained starter home or investment property just minutes from downtown shopping and dining. Includes a fenced backyard and updated flooring.',
  },
  {
    id: 3,
    title: 'Luxury 5BR with Gourmet Kitchen',
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
    description: 'Stunning 5-bedroom residence in Tavares. Boasting almost 3,000 square feet, this home features a gourmet kitchen, high-end stone counters, and a massive loft space.',
  },
  {
    id: 4,
    title: '19-Acre Equestrian Parcel in Citra',
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
    description: 'Incredible opportunity to own 19 acres of prime equestrian land in Citra. Perfect for a custom horse farm or private estate in the heart of Florida horse country.',
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
