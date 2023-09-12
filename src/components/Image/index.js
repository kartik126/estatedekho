import React, { useState } from 'react';
import NextImage from 'next/image';
import styles from './image.module.scss';

const ImgLoader = ({ show, loaded, icon }) => {
  return (
    <div
      style={{ opacity: show ? 1 : 0 }}
      className={`${styles.img_loading} ${loaded ? styles.loaded : ''}`}
    >
      <i className={`fa fa-5x ${icon}`}></i>
    </div>
  );
};

const Image = ({
  src,
  layout,
  width,
  height,
  rootClass,
  rootStyles,
  // style,
  className,
  showLoader,
  ...rest
}) => {
  let imgsrc = `/images/${src}`;
  if (src.includes('http') || src.includes('data:image')) {
    imgsrc = src;
  }

  const [loaded, setLoaded] = useState(false);
  const [imgOptions, setImgOptions] = useState({
    icon: 'fa-image',
  });

  const onLoad = () => {
    setLoaded(true);
    setImgOptions({ icon: '' });
  };

  const onFail = () => {
    setLoaded(false);
    setImgOptions({ icon: 'fa-unlink' });
  };

  const shouldShowImgLoader = showLoader !== false;

  if (layout !== 'fill' && height && width) {
    return (
      <div
        data-optimized-img="true"
        style={rootStyles || {}}
        className={`${rootClass || ''}`}
      >
        <NextImage
          {...rest}
          layout={layout}
          height={height}
          width={width}
          src={imgsrc}
          onLoad={onLoad}
          onLoadedData={onLoad}
          onError={onFail}
          // style={style || {}}
          className={className || ''}
        />
        {shouldShowImgLoader && (
          <ImgLoader loaded={loaded} show={!loaded} icon={imgOptions.icon} />
        )}
      </div>
    );
  }

  return (
    <div
      data-optimized-img="true"
      style={rootStyles || {}}
      className={`${rootClass || ''}`}
    >
      <NextImage
        {...rest}
        layout={'fill'}
        src={imgsrc}
        onLoad={onLoad}
        onLoadedData={onLoad}
        onError={onFail}
        // style={style || {}}
        className={className || ''}
      />
      {shouldShowImgLoader && (
        <ImgLoader loaded={loaded} show={!loaded} icon={imgOptions.icon} />
      )}
    </div>
  );
};

export default Image;
