import React from 'react';
import popup from '../../public/images/ListingPopup.png';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
function ListingPopup() {
  return (
    <>
      <a href="tel:8585854850">
        <Image
          src={popup}
          layout="fill"
          className="cursor-pointer"
          alt=""
          style={{ positon: 'relative' }}
        />
      </a>
    </>
  );
}

export default ListingPopup;
