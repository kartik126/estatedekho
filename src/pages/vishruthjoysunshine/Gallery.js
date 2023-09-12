import React from 'react';
import ImageGallery from 'react-image-gallery';
import one from '../../../public/images/vishruth/1.jpg';
import two from '../../../public/images/vishruth/2.jpg';
import three from '../../../public/images/vishruth/3.jpg';
const images = [
  {
    original:
      'https://vishruthjoysunshine.in/wp-content/uploads/elementor/thumbs/C5046.MP4.11_57_00_09.Still001-1-scaled-q2rl5eqwzmgtjshxch0i4k89zn2hwhlfat2ty99ew0.jpg',
    thumbnail:
      'https://vishruthjoysunshine.in/wp-content/uploads/elementor/thumbs/C5046.MP4.11_57_00_09.Still001-1-scaled-q2rl5eqwzmgtjshxch0i4k89zn2hwhlfat2ty99ew0.jpg',
  },
  {
    original:
      'https://vishruthjoysunshine.in/wp-content/uploads/elementor/thumbs/C5284.MP4.12_50_35_49.Still002-1-scaled-q2rlrf4v0yljf2ixthj00i9urgkx5bz5br15iimj6o.jpg',
    thumbnail:
      'https://vishruthjoysunshine.in/wp-content/uploads/elementor/thumbs/C5284.MP4.12_50_35_49.Still002-1-scaled-q2rlrf4v0yljf2ixthj00i9urgkx5bz5br15iimj6o.jpg',
  },
  {
    original:
      'https://vishruthjoysunshine.in/wp-content/uploads/elementor/thumbs/C5274.MP4.12_48_16_01.Still001-1-scaled-q2rlr6obbg9yikv86vvcw2epezqm821kal5s70z2qo.jpg',
    thumbnail:
      'https://vishruthjoysunshine.in/wp-content/uploads/elementor/thumbs/C5274.MP4.12_48_16_01.Still001-1-scaled-q2rlr6obbg9yikv86vvcw2epezqm821kal5s70z2qo.jpg',
  },
];
function Gallery() {
  return (
    <div
      className=" px-5 py-4 m-3 border border-1 rounded-2 col-lg-8 col-sm-6"
      style={{ background: '#000' }}
      id="gallery"
    >
      <ImageGallery items={images} />
    </div>
  );
}

export default Gallery;
