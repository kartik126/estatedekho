import React from 'react';
import popup from '../../public/images/popup1.png';
import img1 from '../../public/images/illust1.png';
import Image from 'next/image';
import img2 from '../../public/images/illust2.png';
import tick from '../../public/images/tick (1).png';
import call from '../../public/images/phone-call (1).png';
import msg from '../../public/images/phone-call.png';
function HomePopup() {
  return (
    <>
      <a href="tel:8585854850">
        <Image
          src={popup}
          className="cursor-pointer "
          layout="fill"
          style={{ positon: 'relative' }}
        />
      </a>
    </>
  );
}

export default HomePopup;
