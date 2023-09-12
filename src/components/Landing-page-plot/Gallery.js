import React from 'react';
import ImageGallery from 'react-image-gallery';
import one from '../../../public/images/vishruth/1.jpg';
import two from '../../../public/images/vishruth/2.jpg';
// import three from '../../../public/images/vishruth/.jpg';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];
function Gallery({ Gallery }) {
  const galleryImages = Gallery?.map((image) => ({
    original: `${
      image.image_path.includes('projects')
        ? `https://seller.estatedekho.com/${image.image_path}`
        : `https://seller.estatedekho.com/images/projects/${image.image_path}`
    }`,
    thumbnail: `${
      image.image_path.includes('projects')
        ? `https://seller.estatedekho.com/${image.image_path}`
        : `https://seller.estatedekho.com/images/projects/${image.image_path}`
    }`,
  }));

  return (
    <div
      className="px-5 py-4 m-3 border border-1 rounded-2 col-lg-8 col-sm-6"
      style={{ background: '#000' }}
      id="gallery"
    >
      <ImageGallery items={galleryImages} />
    </div>
  );
}

export default Gallery;
