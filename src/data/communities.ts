export interface Community {
  id: string
  name: string
  description: string
  highlights: string[]
  type: 'city' | 'gated' | 'senior'
  image: string
}

export const communities: Community[] = [
  {
    id: 'ocala',
    name: 'Ocala',
    description:
      'Known as the "Horse Capital of the World," Ocala offers a unique blend of rural charm, equestrian culture, and modern amenities. From the World Equestrian Center to charming downtown shops, Ocala is a vibrant place to call home.',
    highlights: [
      'World Equestrian Center (WEC)',
      'FAST (Florida Aquatics Swimming & Training)',
      'Historic Downtown Square',
      'Silver Springs State Park',
      'Top-rated schools',
    ],
    type: 'city',
    image: '/images/community-ocala.jpg',
  },
  {
    id: 'summerfield',
    name: 'Summerfield',
    description:
      'Just south of Ocala, Summerfield offers a quieter pace with easy access to The Villages and surrounding amenities. Popular with retirees and families looking for spacious properties and a strong sense of community.',
    highlights: [
      'Close to The Villages',
      'Affordable housing options',
      'Beautiful rural landscapes',
      'Growing retail and dining',
      'Community-focused living',
    ],
    type: 'city',
    image: '/images/community-summerfield.jpg',
  },
  {
    id: 'belleview',
    name: 'Belleview',
    description:
      'A small city with big charm, Belleview is ideal for those seeking a family-friendly atmosphere with affordable homes and convenient access to both Ocala and The Villages area.',
    highlights: [
      'Family-friendly neighborhoods',
      'Affordable home prices',
      'Easy commute to Ocala',
      'Parks and recreation',
      'Growing community',
    ],
    type: 'city',
    image: '/images/community-belleview.jpg',
  },
  {
    id: 'dunnellon',
    name: 'Dunnellon',
    description:
      'Nestled along the Rainbow River, Dunnellon offers some of the most scenic natural beauty in Central Florida. Perfect for nature lovers, kayakers, and those seeking a slower pace of life surrounded by springs and forests.',
    highlights: [
      'Rainbow Springs State Park',
      'Rainbow River access',
      'Historic downtown',
      'Natural springs',
      'Outdoor recreation paradise',
    ],
    type: 'city',
    image: '/images/community-dunnellon.jpg',
  },
  {
    id: 'beverly-hills',
    name: 'Beverly Hills',
    description:
      'A charming community in Citrus County, Beverly Hills offers affordable living with a friendly, small-town atmosphere. Popular among retirees and those seeking a quiet, laid-back Florida lifestyle.',
    highlights: [
      'Affordable cost of living',
      'Close to Gulf Coast beaches',
      'Golf courses nearby',
      'Small-town atmosphere',
      'Active community events',
    ],
    type: 'city',
    image: '/images/community-beverlyhills.jpg',
  },
  {
    id: 'gated-communities',
    name: 'Gated Communities',
    description:
      'Marion County offers a variety of gated communities with resort-style amenities, walking trails, pools, and clubhouses. Enjoy peace of mind with added security and beautifully maintained neighborhoods.',
    highlights: [
      'Controlled access & security',
      'Resort-style amenities',
      'Community pools & fitness centers',
      'Walking and biking trails',
      'Well-maintained common areas',
    ],
    type: 'gated',
    image: '/images/community-gated.jpg',
  },
  {
    id: '55-plus',
    name: '55+ Communities',
    description:
      'Active adult living at its finest. The Ocala area has a growing number of 55+ communities offering organized activities, golf, fitness centers, and social clubs designed for an active retirement.',
    highlights: [
      'Active lifestyle amenities',
      'Social clubs and activities',
      'Golf and fitness',
      'Low-maintenance living',
      'Like-minded neighbors',
    ],
    type: 'senior',
    image: '/images/community-55plus.webp',
  },
]
