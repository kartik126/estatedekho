import React from 'react';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
const CustomNextArrow = ({ onClick }) => {
  return (
    <div className='px-1 cursor-pointer' style={{position:'absolute',top:'50%',right:10,background:'#F6F6F6',borderRadius:100,zIndex:998}} onClick={onClick}>
      <ArrowForwardIosRoundedIcon style={{fontSize:15}}/>
    </div>
  );
};

export default CustomNextArrow;