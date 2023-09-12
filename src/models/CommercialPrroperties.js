import kapilproperties from '../../public/images/commercial/image.png';
import kapilproperties1 from '../../public/images/kapil property/kapil park 4.PNG';
import kapilproperties2 from '../../public/images/commercial/kapilproperties.png';
import sensation from '../../public/images/commercial/sensationinfra.webp';
import sensation1 from '../../public/images/sensation infra/Elevation-2.jpg';
import sensation2 from '../../public/images/sensation infra/Elevation-3.jpg';
import sensation3 from '../../public/images/sensation infra/Entrance Lobby (1).jpg';
import sensation4 from '../../public/images/sensation infra/Entrance Lobby .jpg';
import westwave from '../../public/images/commercial/westwave.jpg';
import myron from '../../public/images/commercial/myron.jpg';
import radhaspaces from '../../public/images/commercial/Project-Photo-2-Kokapet-Terminal--Hyderabad-5275421_600_800_470_1080.jpg';
import radhaspaces1 from '../../public/images/Radha spaces/kokapet terminal 1 (1).png';
import radhaspaces2 from '../../public/images/Radha spaces/kokapet terminal 2.png';
import radhaspaces3 from '../../public/images/Radha spaces/kokapet terminal 3.png';
import radhaspaces4 from '../../public/images/Radha spaces/kokapet terminal 4.png';
import radhaspaces5 from '../../public/images/Radha spaces/kokapet terminal 5.png';
import pvrlogo from '../../public/images/pvr/logo.png';
import pvr1 from '../../public/images/westwave/1.jpg';
import pvr2 from '../../public/images/westwave/2.jpg';
import pvr3 from '../../public/images/westwave/3.jpg';
import pvr4 from '../../public/images/westwave/4.jpg';
import pvr5 from '../../public/images/westwave/5.jpg';
import pvr6 from '../../public/images/westwave/6.jpg';
import pvr7 from '../../public/images/westwave/7.jpg';
import myron1 from '../../public/images/myron homes/Bachupally Shopping Mall.jpg';
import myron2 from '../../public/images/myron homes/myron2.jpg';
import myronlogo from '../../public/images/myron homes/Myron Homes-logo.jpg';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import FlareOutlinedIcon from '@mui/icons-material/FlareOutlined';
import DoorSlidingOutlinedIcon from '@mui/icons-material/DoorSlidingOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import FenceOutlinedIcon from '@mui/icons-material/FenceOutlined';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import radhaspacelogo from '../../public/images/Radha spaces/radhaspacelogo.png';
import kapillogo from '../../public/images/kapil property/kapil logo 1.PNG';
import sensationlogo from '../../public/images/sensation infra/Sensation infra logo 1.PNG';

const commercialData = [
  {
    id: 1,
    name: 'kapil business park',
    developer: 'Kapil Property ',
    cost: '36L-79L',
    area: '144 - 720 Sqft',
    possession: 'Sep, 2026',
    priceperunit: '12500 - 3000 sqft',
    location: 'Shamshabad, Hyderabad,Telangana',
    type: 'commercial space',
    img: kapilproperties,
    logo: kapillogo,
    amenities: [
      { img: <LunchDiningOutlinedIcon />, code: 'Food Court' },
      { img: <LocalCafeOutlinedIcon />, code: 'Cafeteria' },
      { img: <FlareOutlinedIcon />, code: 'vastu compliant' },
      { img: <DoorSlidingOutlinedIcon />, code: 'lift' },
      { img: <SecurityOutlinedIcon />, code: '24/7 security' },
      { img: <WaterOutlinedIcon />, code: '24/7 Water Supply' },
      { img: <WaterOutlinedIcon />, code: 'Rain Water Harvesting' },
    ],
    images: [{ img: kapilproperties2 }, { img: kapilproperties1 }],
    detail:
      'Welcome to Kapil Business Park, a world-class, sprawling commercial high-rise located in Shamshabad. A flagship project of Kapil Properties, Kapil Business Park offers great proximity to upmarket locations like the financial district, IT and pharmaceutical hubs, international airport, etc., and hosts the most elegant Aerospace and commercial spaces for businesses.',
  },
  {
    id: 2,
    name: 'Sensation Hyderabad One',
    developer: 'SENSATION INFRACON PRIVATE LIMITED',
    cost: '71.46 L',
    area: '397 Sqft',
    possession: 'Jun, 2026',
    priceperunit: '18000 sqft',
    location: 'Nanakaramguda, Hyderabad',
    type: 'commercial space',
    img: sensation,
    logo: sensationlogo,
    rera: `P02400003653`,
    amenities: [
      {
        img: <LunchDiningOutlinedIcon />,
        code: 'Multicuisine Restaurants',
      },
      {
        img: <FitnessCenterOutlinedIcon />,
        code: 'Gymnasium',
      },
      { img: <DeckOutlinedIcon />, code: 'Terrace lounge bar' },
      { img: <FlareOutlinedIcon />, code: 'vastu compliant' },
      { img: <DoorSlidingOutlinedIcon />, code: 'High speed lifts' },
      { img: <SecurityOutlinedIcon />, code: '24/7 security' },
    ],
    images: [
      { img: sensation },
      { img: sensation4 },
      { img: sensation1 },
      { img: sensation2 },
      { img: sensation3 },
    ],
    detail: `
    Hyderabad One, the first of it's kind project in hyderabad is a part of 6 Million Sft IT SEZ of Phoenix TechZone Private Limited is the World's Tallest Serviced Suites Skyscraper with 1928 Luxury serviced suites of sizes 397 SqFt and 546 SqFt furnished to it's Best in India located at bustling Business HUB of Hyderabad, Financial District.
    
    The tower will offer a range of facilities for individuals across the spectrum. Food courts, bars and fine dining restaurants.A state of the art 7-Star Sensation Club which includes gymnasiums, salons, India's highest sky lounge that stands 700 m above sea level with spectacular views spanning the city's multi-cultural skyline. Add to it, Fun City, with world class gaming & virtual reality experience is also a part of Sensation Club.
    
    These are just some of the features that one can look forward to. Many of these services will be exclusive to owners and residents of the tower. The tower will be serviced the world's leading service apartment operator, Oakwood. Thus ensuring best-in-class understanding and execution of guest needs`,
  },
  {
    id: 3,
    name: 'Kokapet Terminal ',
    developer: 'Radha spaces',
    aboutDeveloper:
      'Kokapet Terminal is a joint venture between Radha Spaces, Raichandani Constructions, Pramukh Properties and Nakhat Real Estate. Together they have over 50 years of combined experience in real estate projects. Their rich credential adds credibility and value to the project and makes it a great investment for the future.',
    cost: '1 Cr',
    area: '800 Sqft',
    possession: 'Ready To Move',
    priceperunit: '12500 sqft',
    location: 'Kokapet, Hyderabad',
    type: 'commercial space',
    img: radhaspaces1,
    logo: radhaspacelogo,
    floor: 4,
    rera: `P02400002171`,
    amenities: [
      {
        img: <FlareOutlinedIcon />,
        code: 'vastu compliant',
      },
      {
        img: <CameraAltOutlinedIcon />,
        code: 'cctv camera',
      },
      { img: <SecurityOutlinedIcon />, code: '24x7 security' },
      { img: <BoltOutlinedIcon />, code: '24/7 power backup' },
      { img: <DoorSlidingOutlinedIcon />, code: 'lift' },
      { img: <WaterOutlinedIcon />, code: 'Sewage Treatment Plant' },
    ],
    images: [
      { img: radhaspaces1 },
      { img: radhaspaces3 },
      { img: radhaspaces2 },
      { img: radhaspaces4 },
      { img: radhaspaces5 },
    ],
    detail: `
    Looking for bare shell office space and shop for property investment purposes in Hyderabad, Kokapet Terminal can be the right bet for you. It is a ready to move project in Kokapet, Hyderabad, offering investment options within your budget. For those looking for exciting returns on investment, Kokapet Terminal is Hyderabad's most desirable commercial  project, where property options are available starting Rs. 1.75 Cr. Kokapet Terminal Kokapet has shops, offering maximum visibility and high footfalls. 
    
Benefits of investing in Kokapet Terminal:

Multiple investment options

Kokapet Terminal Hyderabad is spread over 1.5 acres and have 165 units to offer. The properties in Kokapet Terminal are available in numerous configurations. Kokapet Terminal Bare shell Office Space are available in 1,400 sq.ft. whereas Shop are available in 1,400 sq.ft.   The project has vast dimensions and has single tower here. `,
    // images:[
    //   {img:radhaspaces1},
    //   {img:radhaspaces2},
    //   {img:radhaspaces3},
    //   {img:radhaspaces4},
    //   {img:radhaspaces5},
    // ]
  },
  {
    id: 4,
    name: 'PVR West Wave',
    developer: 'PVR Developers',
    aboutDeveloper:
      'PVR DEVELOPERS INDIA PVT LTD,over years has evolved into a Trusted Reliable Group that has sought to Thrive YOU through its Focused Approach,Continuous Efforts,Timely Execution Delivery of our Projects s Promised to our Clients Stake Holders.Our Idea is to Churn out Abodes Landmarks of Highest Quality with Thoughtful Practical Communities Spaces that People Enjoy through their Lives.PVR Developers is committed to:Executionary Discipline,Desire to Thrive Humbly,Qualitative Approach,PunctualityTimeliness,Trust of Clients Vendors,Student Mentality/Forever Evolving',
    cost: '89.99 L',
    area: '1000 Sqft',
    possession: 'Under construction',
    priceperunit: '8999 sqft',
    location: 'Kokapet, Hyderabad',
    type: 'Commercial Space',
    img: westwave,
    logo: pvrlogo,
    lp: 'LP No.1/C20/14099/2019',
    amenities: [
      { img: <ChildCareOutlinedIcon />, code: 'Creche/Day care' },
      {
        img: <LocalCafeOutlinedIcon />,
        code: 'Cafeteria',
      },
      { img: <BoltOutlinedIcon />, code: '24/7 Power Backup' },
      { img: <FenceOutlinedIcon />, code: 'Gated Community' },
      { img: <FitnessCenterOutlinedIcon />, code: 'Gymnasium' },
      { img: <YardOutlinedIcon />, code: 'Landscape Garden' },
    ],
    images: [
      { img: pvr1 },
      { img: pvr4 },
      { img: pvr2 },
      { img: pvr3 },
      { img: pvr5 },
      { img: pvr6 },
      { img: pvr7 },
    ],
    detail: `
    Office space starting from 1000sqft Ongoing commercial office project “WEST WAVE” a New Global Landmark at Financial District. West Wave is of ~2.1 mn sq ft in two towers with Grade A specifications with just behind One West (ADP Hyderabad) and right opposite to Wave Rock (Accenture Building), beside Shri Ram Global School.

GHMC Approved (LP No.1/C20/14099/2019), RERA (Applied) 
Two Towers (A & B) with 3 Basement & 4 Podium Parking + 13 floors. 
Project Handover by 36 months, Post RERA Approval. 
Adaptable design to suit multi-occupants  
Lustrous Glass Facade represents brilliance of efficient architecture  
Floor to Floor height of 4 m for better air circulation and positive ambiance  
Refuge area provided in upper floors as per NBC standards  
Ample Car Parking 
High speed lifts with DCS (Destination Control System) to optimize the movement to desired floors.  
Breathe easy lifts with a capacity of 20+ passengers.  
Central Air-conditioning  
100% Power backup  
Round the clock CCTV Surveillance   
IGBC & LEED Gold Certified
    `,
  },
  {
    id: 5,
    name: 'Bachupally Shopping Mall',
    developer: 'Myron Homes',
    aboutDeveloper: `Most Trusted Real Estate Builder in Hyderabad, Myron Homes is a developer of both residential and commercial properties. We aim to focus on projects that would guarantee our clients complete satisfaction, ideal return rates, and high-quality deliverables.
    
    We want to strongly encourage you to continue supporting our vision and expansion as a member of the "Myron Family" as we set out on this mission to diversify our organisation by targeting high-end real estate markets.
    `,
    cost: '30 L',
    area: '300 Sqft',
    possession: '2027',
    priceperunit: '10000/Sqft',
    location: 'Bachupally, Hyderabad',
    type: 'Commercial Space',
    img: myron,
    logo: myronlogo,

    amenities: [
      {
        img: <LocalCafeOutlinedIcon />,
        code: 'Cafeteria',
      },
      { img: <BoltOutlinedIcon />, code: '24/7 Power Backup' },
      { img: <DoorSlidingOutlinedIcon />, code: 'lift' },
      { img: <SecurityOutlinedIcon />, code: '24/7 security' },
      { img: <WaterOutlinedIcon />, code: '24/7 Water Supply' },
      {
        img: <CameraAltOutlinedIcon />,
        code: 'cctv camera',
      },
    ],
    images: [{ img: myron1 }, { img: myron2 }],
    detail: `Bachupally Shopping Mall (Commercial) in Bachupally Hyderabad is the contemporary living space and the 2 bedrooms seamlessly integrated with a spacious balcony. After a day of productivity, relax on the balcony and enjoy the panoramic views of the beautiful courtyard. Fulfil your culinary dreams in the open-plan, modern kitchen.
    The bathrooms are well designed with concealed toilet cistern, mirrored wall cabinet and ambient lighting.
    
    Property features:
    • Builtup area of 300 Sqft.
    • Average price : 10000/Sqft
    • 2 Bathrooms
    • 2 Bedrooms.`,
  },
];
export default commercialData;
