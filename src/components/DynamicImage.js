import Image from 'next/image';

const DynamicImage = ({ src, alt, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt || 'card cap'}
      width={width}
      height={height}
      layout="responsive"
    />
  );
};

export default DynamicImage;
