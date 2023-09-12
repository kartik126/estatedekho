import React from 'react';

function Header({ header }) {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //     <img style={{width:100}} src={`https://seller.estatedekho.com/${header?.logo}`} />
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNavAltMarkup"
    //       aria-controls="navbarNavAltMarkup"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <div className="navbar-nav">
    //         <a className="nav-link active" aria-current="page" href="#">
    //           Home
    //         </a>
    //         <a className="nav-link" href="#">
    //           Features
    //         </a>
    //         <a className="nav-link" href="#">
    //           Pricing
    //         </a>
    //         <a className="nav-link disabled" href="#" aria-disabled="true">
    //           Disabled
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <div
      className="landing-pg-header d-flex flex-row align-items-center px-4 "
      style={{
        height: '70px',
        position: 'fixed',
        width: '100%',
        zIndex: '999',
        backgroundColor: '#ffff',
      }}
    >
      <div className="col-sm-3 pl-4 ">
        <img
          src={`https://seller.estatedekho.com/${header?.logo}`}
          width={120}
          height={50}
        />
      </div>
      <div className="col-sm-1"></div>
      <div className="landing-pg-head col-sm-5 col-9  d-flex flex-row justify-content-around">
        <li className="display fs-7 fw-semibold cursor-pointer ">
          <a
            style={{
              fontWeight: 500,
              fontSize: '14px',
            }}
            href="#home"
          >
            Home
          </a>{' '}
        </li>

        <li className="display fs-7 fw-semibold cursor-pointer">
          <a
            style={{
              fontWeight: 500,
              fontSize: '14px',
            }}
            href="#aboutus"
          >
            About Project
          </a>{' '}
        </li>
        <li className="display fs-7 fw-semibold cursor-pointer">
          <a
            style={{
              fontWeight: 500,
              fontSize: '14px',
            }}
            href="#amenities"
          >
            Amenities
          </a>{' '}
        </li>

        <li className="display fs-7 fw-semibold cursor-pointer">
          <a
            style={{
              fontWeight: 500,
              fontSize: '14px',
            }}
            href="#gallery"
          >
            {' '}
            Gallery
          </a>
        </li>
        <li className="display fs-7 fw-semibold cursor-pointer">
          <a
            style={{
              fontWeight: 500,
              fontSize: '14px',
            }}
            href="#floorplan"
          >
            {' '}
            Floor Plans
          </a>
        </li>
        <li className="display fs-7 fw-semibold cursor-pointer">
          <a
            style={{
              fontWeight: 500,
              fontSize: '14px',
            }}
            href="#location"
          >
            Location
          </a>{' '}
        </li>
      </div>
    </div>
  );
}

export default Header;
