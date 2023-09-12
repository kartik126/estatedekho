import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Skeleton from '@mui/material/Skeleton';
import apiClient from 'utils/apiClient';
import DynamicImage from 'components/DynamicImage';
function NewsArticles({ data, premiumProjectData }) {
  const [Data, setData] = useState(null);
  // const [AdSpaceData, setAdSpaceData] = useState(adData);

  useEffect(() => {
    console.log('News data========>', premiumProjectData);
    setData(premiumProjectData);
  });

  return (
    <div className="row quicklink_main">
      <div className="row topvilla_heading">
        <div className=" d-flex justify-content-sm-between align-items-center col-md-12">
          <h1>
            <span style={{ fontWeight: '700' }}>News and Articles</span>
          </h1>
          <Link href="news/NewsandArticles">
            <p>
              View All <ExpandCircleDownOutlinedIcon />{' '}
            </p>
          </Link>
        </div>
      </div>
      <div className="row quicklink_view">
        {data == null ? (
          <>
            <div className="row topvilla_view">
              <div className="col-4">
                {' '}
                <Skeleton variant="rectangular" width={'100%'} height={200} />
                <Skeleton />
                <Skeleton width="60%" />
              </div>
              <div className="col-4 col-sm">
                {' '}
                <Skeleton variant="rectangular" width={'100%'} height={200} />
                <Skeleton />
                <Skeleton width="60%" />
              </div>
              <div className="col-4 col-sm">
                {' '}
                <Skeleton variant="rectangular" width={'100%'} height={200} />
                <Skeleton />
                <Skeleton width="60%" />
              </div>
            </div>
          </>
        ) : (
          <>
            {' '}
            {data?.slice(0, 3).map((val) => {
              return (
                <>
                  <Link href={`/blogDetail/${val.slug}`}>
                    <div className=" d-flex justify-content-center col-md-4">
                      <div className="card">
                        <DynamicImage
                          src={apiClient.Urls.imgUrl + val.cover_image}
                          alt={'Card cap'}
                          width={'100%'}
                          height={'50%'}
                        />

                        <div className="row card-body">
                          <div
                            className="col-md-12"
                            style={{
                              padding: '5px 20px',
                              textOverflow: 'ellipsis',
                              overflow: 'hidden',
                              whiteSpace: 'normal',
                            }}
                          >
                            <h5
                              className="card-title line-limit"
                              style={{
                                color: '#212429',
                                fontSize: '15px',
                                fontWeight: '600',
                                lineBreak: 'anywhere',
                              }}
                            >
                              {val.title}
                            </h5>
                            <p
                              style={{
                                color: 'rgb(151 151 151)',
                                fontWeight: 600,
                                fontSize: '11px',
                              }}
                            >
                              {`${new Date(val.created_at).toDateString()}`}
                            </p>
                            {/* <p className="card-text" style={{ padding: '0 4px' }}>
                            <div
                              style={{ whiteSpace: 'normal' }}
                              dangerouslySetInnerHTML={{
                                __html: val.description,
                              }}
                            />
                          </p> */}
                            <h5
                              style={{
                                fontSize: '13px',
                                textAlign: 'center',
                                cursor: 'pointer',
                              }}
                            >
                              Know More <ExpandCircleDownOutlinedIcon />
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default NewsArticles;
