import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ParkOutlinedIcon from '@mui/icons-material/ParkOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import ConnectingAirportsOutlinedIcon from '@mui/icons-material/ConnectingAirportsOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
const typesOfPlaces = {
  transport: [
    {
      id: 't1',
      name: 'Bus Station',
      category: 'transit_station',
      icon: <DirectionsBusFilledOutlinedIcon />,
    },
    {
      id: 't2',
      name: 'Train Station',
      category: 'train_station',
      icon: <TrainOutlinedIcon />,
    },
    {
      id: 't3',
      name: 'Airport',
      category: 'airport',
      icon: <ConnectingAirportsOutlinedIcon />,
    },
  ],
  essentials: [
    {
      id: 'e1',
      name: 'Hospital',
      category: 'hospital',
      icon: <LocalHospitalOutlinedIcon />,
    },
    {
      id: 'e2',
      name: 'Supermarket',
      category: 'supermarket',
      icon: <LocalGroceryStoreOutlinedIcon />,
    },
    {
      id: 'e3',
      name: 'Bank',
      category: 'bank',
      icon: <AccountBalanceOutlinedIcon />,
    },
    {
      id: 'e4',
      name: 'Police',
      category: 'police',
      icon: <LocalPoliceOutlinedIcon />,
    },
    {
      id: 'e5',
      name: 'School',
      category: 'school',
      icon: <SchoolOutlinedIcon />,
    },
  ],
  utility: [
    {
      id: 'u1',
      name: 'Movie Theater',
      category: 'movie_theater',
      icon: <MovieCreationOutlinedIcon />,
    },
    {
      id: 'u2',
      name: 'Gym',
      category: 'gym',
      icon: <FitnessCenterOutlinedIcon />,
    },
    {
      id: 'u3',
      name: 'Park',
      category: 'park',
      icon: <ParkOutlinedIcon />,
    },
    {
      id: 'u4',
      name: 'Restaurant',
      category: 'restaurant',
      icon: <LocalDiningOutlinedIcon />,
    },

    {
      id: 'u5',
      name: 'Shopping Mall',
      category: 'shopping_mall',
      icon: <ShoppingBagOutlinedIcon />,
    },
  ],
};
export default typesOfPlaces;
