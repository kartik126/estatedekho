import loginReducer from './reducer/login';
import signupReducer from './reducer/signup';
import sessionReducer from './session';
import newHomeReducer from './reducer/home';
import propertyDetailsReducer from './reducer/propertydetails';
import CitiesReducer from './reducer/cities';
import propertyListingReducer from './reducer/propertyListing';
import menuReducer from './reducer/newsMenu';

const rootReducer = {
  login: loginReducer,
  signup: signupReducer,
  home: newHomeReducer,
  session: sessionReducer,
  propertydetails: propertyDetailsReducer,
  cities: CitiesReducer,
  propertyListing: propertyListingReducer,
  newsMenu: menuReducer
};

export default rootReducer;
