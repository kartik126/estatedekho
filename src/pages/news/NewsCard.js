import DynamicImage from 'components/DynamicImage';
import React from 'react';
import apiClient from 'utils/apiClient';

function NewsCard({ newsItem }) {
  return (
    <div
      className="d-flex flex-row col-md-8 cursor-pointer"
      style={{
        height: '185px',
        padding: 0,
        borderRadius: '3px',
        overflow: 'hidden',
        marginBottom: '25px',
        border: '1px solid #eaeaea',
      }}
    >
      <div className="col-md-4 col-sm-4">
        <DynamicImage
          key={newsItem?.id}
          src={
            apiClient.Urls.imgUrl +
            (newsItem?.featured_image_path || newsItem?.featured_image)
          }
          alt={'Card cap'}
          width={'100%'}
          height={'100%'}
        />
      </div>
      <div
        className="col-md-8 col-sm-4 py-2 px-3"
        style={{ position: 'relative' }}
      >
        <h1 className="line-limit" style={{ fontSize: 18, fontWeight: 500 }}>
          {newsItem?.project_name || newsItem?.plot_name}
        </h1>
        <p
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: '#245E8A',
          }}
        >
          {`${new Date(newsItem?.created_at).toDateString()}`}
        </p>
        <p
          className="line-limit"
          style={{
            lineHeight: 1.3,
            fontSize: '13px',
            color: '#7e7e7e',
            fontWeight: 500,
          }}
        >
          {newsItem?.project_description || newsItem?.plot_description}
        </p>
        <p
          className="px-2 py-1"
          style={{
            fontSize: 12,
            fontWeight: 500,
            color: 'rgb(36, 94, 138)',
            border: '1.5px solid rgb(36, 94, 138)',
            width: 'fit-content',
            position: 'absolute',
            right: 15,
            bottom: 5,
          }}
        >
          Read more
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
