import React from 'react';
import { Skeleton } from '@mui/material';

export default function skeleton() {
  return (
    <>
      <div className="row pt-5">
        <div className="col-sm mx-5">
          <Skeleton
            variant="rectangular"
            width="100%"
            height={400}
            style={{ borderRadius: '10px', marginTop: '50px' }}
          />
        </div>
      </div>
      <div className="row">
        <div className="row">
          <div className="col-sm-2 mt-3 mx-5">
            <Skeleton
              variant="text"
              width="80%"
              height={14}
              style={{ marginBottom: '10px' }}
            />
          </div>
        </div>
        <div className="row mx-4">
          <Skeleton
            variant="text"
            width="50%"
            height={32}
            style={{ marginBottom: '20px', marginLeft: 20 }}
          />
        </div>
      </div>
      <div className="d-flex flex-row">
        <div className="col-12 mx-5 my-4">
          <Skeleton
            variant="text"
            width="80%"
            height={18}
            style={{ marginBottom: '10px' }}
          />
          <Skeleton
            variant="text"
            width="90%"
            height={16}
            style={{ marginBottom: '10px' }}
          />
          <Skeleton
            variant="text"
            width="90%"
            height={16}
            style={{ marginBottom: '10px' }}
          />
          <Skeleton
            variant="text"
            width="90%"
            height={16}
            style={{ marginBottom: '10px' }}
          />
          <Skeleton
            variant="text"
            width="70%"
            height={16}
            style={{ marginBottom: '10px' }}
          />
          <Skeleton
            variant="text"
            width="70%"
            height={16}
            style={{ marginBottom: '10px' }}
          />
          <Skeleton
            variant="text"
            width="90%"
            height={16}
            style={{ marginBottom: '10px' }}
          />
        </div>
      </div>
    </>
  );
}
