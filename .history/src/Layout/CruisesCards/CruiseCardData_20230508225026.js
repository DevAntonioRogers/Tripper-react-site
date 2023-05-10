import RC from '../../assets/cruise/Royal.jpeg'
import Hawaii from '../../assets/cruise/Hawaii.jpeg'
import Amsterdam from '../../assets/cruise/Amsterdam.jpeg'
import Bahamas from '../../assets/cruise/Bahamas.jpeg'
import Holland from '../../assets/cruise/holland.jpeg'
import Celebrity from '../../assets/cruise/celebrity.jpeg'
import Alaska from '../../assets/cruise/alaska.jpeg'
import Princess from '../../assets/cruise/princess-3.jpg'

export const CruiseCardData = [
  {
    id: 0,
    name: 'Royal Caribbean',
    image: RC,
    depart: 'Miami, Florida',
    details: 'Royal Caribbean cruise is a luxurious and exciting way to explore some of the most beautiful destinations in the Caribbean, with stunning views, delicious dining options, and plenty of activities and entertainment on board. Get ready for a truly unforgettable vacation experience!',
    stayAmount: '7 days for ',
    price: '$1023',
    rating: 4,
    pool: true,
    arcade: false,
    spa: true,
    roomService: true,
    smokingRooms: false,
    moreImages: [
      "https://images.unsplash.com/photo-1561811358-21aef14f0551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      'https://images.unsplash.com/photo-1617859047452-8510bcf207fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    ]
  },

  {
    id: 1,
    name: 'Pride of America',
    image: Hawaii,
    depart: 'Honolulu, Hawaii',
    details:
      'Pride of America is one of Norwegians most popular ships, offering guests the chance to explore the beautiful Hawaiian islands while enjoying top-notch amenities and entertainment. You can experience the vibrant culture, stunning landscapes, and delicious cuisine of Hawaii, all while enjoying the comfort and luxury of a world-class cruise ship.',
    stayAmount: '7 days for ',
    price: '$1890',
    rating: 4,
    pool: false,
    arcade: true,
    spa: false,
    roomService: true,
    smokingRooms: true
  },

  {
    id: 2,
    name: 'Nieuw Amsterdam',
    image: Amsterdam,
    depart: 'Fort Lauderdale, Florida',
    details:
      'Nieuw Amsterdam, one of Holland America Lines newest and most luxurious ships, offers guests an unforgettable journey through the stunning destinations of the Eastern Caribbean. With its elegant design, exceptional amenities, and exceptional service.',
    stayAmount: '7 days for ',
    price: '$2089',
    rating: 4,
    pool: true,
    arcade: true,
    spa: true,
    roomService: true,
    smokingRooms: false
  },

  {
    id: 3,
    name: 'Anthem of Seas',
    image: Bahamas,
    depart: 'Cape Liberty, New Jersey',
    details:
      "Anthem of the Seas is one of Royal Caribbean's most innovative and exciting ships, offering guests a wide range of thrilling activities and amenities, from skydiving simulators and bumper cars to Broadway-style shows and gourmet dining options.",
    stayAmount: '7 days for ',
    price: '$1868',
    rating: 5,
    pool: true,
    arcade: true,
    spa: true,
    roomService: false,
    smokingRooms: false

  },

  {
    id: 4,
    name: 'Holland America',
    image: Holland,
    depart: 'Fort Lauderdale, Florida',
    details:
      "With its exceptional amenities, world-class dining, and immersive cultural experiences, Rotterdam is the perfect choice for travelers seeking a refined and enriching vacation experience in Panama Canal and Central America",
    stayAmount: '7 days for ',
    price: '$1533',
    rating: 5,
    pool: true,
    arcade: true,
    spa: true,
    roomService: false,
    smokingRooms: true

  },

  {
    id: 5,
    name: 'Celebrity Apex',
    image: Celebrity,
    depart: 'Fort Lauderdale, Florida',
    details:
      "Celebrity Apex, one of the newest and most innovative ships in the fleet, offers guests an unforgettable journey through the stunning destinations of the Eastern Caribbean. With its luxurious accommodations, exquisite dining options, and top-notch entertainment.",
    stayAmount: '7 days for ',
    price: '$1933',
    rating: 3,
    pool: false,
    arcade: false,
    spa: true,
    roomService: true,
    smokingRooms: true

  },

  {
    id: 6,
    name: 'Norwegian Encore',
    image: Alaska,
    depart: 'Seattle, Washington',
    details:
      "Norwegian Cruise Line's Norwegian Encore is a state-of-the-art ship offering guests an unforgettable journey through the breathtaking scenery and rugged wilderness of Alaska. With its expansive observation lounge, world-class dining options, and thrilling onboard activities.",
    stayAmount: '7 days for ',
    price: '$1013',
    rating: 5,
    pool: false,
    arcade: false,
    spa: true,
    roomService: true,
    smokingRooms: false

  },

  {
    id: 7,
    name: 'Princess Cruise',
    image: Princess,
    depart: 'Miami, Florida',
    details:
      "Norwegian Cruise Line's Norwegian Encore is a state-of-the-art ship offering guests an unforgettable journey through the breathtaking scenery and rugged wilderness of Alaska. With its expansive observation lounge, world-class dining options, and thrilling onboard activities, Norwegian Encore promises an exciting and immersive vacation experience that is perfect for adventure-seekers and nature lovers.",
    stayAmount: '7 days for ',
    price: '$1073',
    rating: 5,
    pool: false,
    arcade: true,
    spa: true,
    roomService: true,
    smokingRooms: true

  },
]


