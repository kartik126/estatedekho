import React from 'react';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const CustomPrevArrow = ({ onClick }) => {
  return (
    <div
      className="px-1 cursor-pointer"
      onClick={onClick}
      style={{
        position: 'absolute',
        left: 10,
        top: '50%',
        zIndex: 998,
        background: '#F6F6F6',
        borderRadius: 100,
      }}
    >
      <ArrowBackIosRoundedIcon style={{ fontSize: 15 }} />
    </div>
  );
};

export default CustomPrevArrow;
