import React from 'react';
import apiClient from 'utils/apiClient';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import DynamicImage from 'components/DynamicImage';
import Link from 'next/link';

function NewsCardHome({ val }) {
  return (
    <Link href={`/blogDetail/${val?.slug}`}>
      <div
        key={val?.id}
        className=" d-flex justify-content-center col-md-4 my-3"
      >
        <div className="card" style={{width:'100%',paddingBottom:"12px"}}>
          <DynamicImage
            key={val?.id}
            src={apiClient.Urls?.imgUrl + val?.cover_image}
            alt={'Card cap'}
            width={'100%'}
            height={'60%'}
          />
          <div className="row card-body">
            <div className="col-md-12" style={{ padding: ' 5px 20px' }}>
              <h5
                className="card-title cursor-pointer line-limit"
                style={{
                  color: '#212429',
                  fontSize: '15px',
                  fontWeight: '600',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {val?.title}
              </h5>
              <p
                style={{
                  color: 'rgb(151 151 151)',
                  fontWeight: 600,
                  fontSize: '11px',
                }}
              >
                {`${new Date(val?.created_at).toDateString()}`}
              </p>
              <p className="card-text" style={{ padding: '0 4px' }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: val?.description,
                  }}
                />
              </p>
              <h5
                style={{
                  fontSize: '14px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  color: '#386db5',
                  fontWeight: 700,
                  position: 'absolute',
                  right: 0,
                  left: 0,
                  bottom: '4px',
                }}
              >
                Know More <ExpandCircleDownOutlinedIcon />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NewsCardHome;
