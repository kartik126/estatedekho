import Image from 'next/image';
import React from 'react';
import logo from '../../../public/images/vishruth/shunshine.png';
import logo1 from '../../../public/images/vishruth/vishruthlogo.png';
import sticker from '../../../public/images/Powered_By__1_-removebg-preview.png';
function Footer() {
  return (
    <div
      className="border py-2"
      style={{
        height: '100px',
        background: 'rgb(193 193 193)',
        position: 'relative',
        zIndex: '-1',
      }}
    >
      <div className="col-lg-4 px-5 d-flex justify-content-between align-items-center">
        <Image src={logo} />
        <Image src={logo1} width={100} height={70} />
      </div>
    </div>
  );
}

export default Footer;
