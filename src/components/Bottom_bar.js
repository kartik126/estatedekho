import Home1 from '../../public/images/home1.png';
import Home2 from '../../public/images/home.png';
import Saved from '../../public/images/saved.png';
import Search from '../../public/images/search.png';
import Account from '../../public/images/account.png';
import Saved1 from '../../public/images/saved1.png';
import Search1 from '../../public/images/search1.png';
import Account1 from '../../public/images/account1.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LoginModal from './LoginModal/LoginModal';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchFilterMobile from './SearchFilterMobile';
import AccountMobile from './AccountMobile';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  height: '50%',
  bgcolor: 'none',
  border: 'none',
  borderRadius: '10px',
};
function Bottom_bar({ saveState }) {
  const [token, setToken] = useState(null);
  const [hoverHomeIcon, setHoverHomeIcon] = useState(false);
  const [hoverSearchIcon, setHoverSearchIcon] = useState(true);
  const [loginOpen, setloginOpen] = useState(false);

  const [hoverSavedIcon, setHoverSavedIcon] = useState(true);
  const [hoverAccountIcon, setHoverAccountIcon] = useState(true);
  const [Searchfilter, setSearchfilter] = useState(false);
  const [account, setaccount] = useState(false);
  const [loginModal, setloginModal] = useState(false);
  const handleClose = () => {
    setloginOpen(false);
    setHoverAccountIcon(true);
    setHoverHomeIcon(false);
  };
  const homeIcon = () => {
    setHoverHomeIcon(false);
    setHoverSearchIcon(true);
    setHoverSavedIcon(true);
    setHoverAccountIcon(true);
  };
  const SearchIcon = () => {
    setHoverSearchIcon(false);
    setHoverAccountIcon(true);
    setHoverHomeIcon(true);
    setHoverSavedIcon(true);
  };
  const SavedIcon = () => {
    setHoverSavedIcon(false);
    setHoverAccountIcon(true);
    setHoverHomeIcon(true);
    setHoverSearchIcon(true);
  };
  const AccountIcon = () => {
    setHoverAccountIcon(false);
    setHoverHomeIcon(true);
    setHoverSavedIcon(true);
    setHoverSearchIcon(true);
  };
  const handleSearchState = () => {
    setSearchfilter(false);
    setHoverHomeIcon(false);
    setHoverSearchIcon(true);
    setHoverSavedIcon(true);
    setHoverAccountIcon(true);
  };

  const handleAccountState = () => {
    setaccount(false);
    setHoverAccountIcon(true);
    setHoverHomeIcon(false);
    setHoverSavedIcon(true);
    setHoverSearchIcon(true);
  };
  useEffect(() => {
    if (localStorage.getItem('authToken') != 'null') {
      var token = localStorage.getItem('authToken');
      setToken(token);
    }
  });
  return (
    <>
      {account || Searchfilter ? (
        <>
          {Searchfilter ? (
            <SearchFilterMobile handleSearchState={handleSearchState} />
          ) : null}
          {account ? (
            <AccountMobile handleAccountState={handleAccountState} />
          ) : null}
        </>
      ) : (
        <div className="container c-container">
          <div className="row d-flex align-items-center bottom-nav-main">
            <Link href="/">
              <div className="col d-flex justify-content-center">
                {hoverHomeIcon ? (
                  <button
                    className="c-btn"
                    onClick={() => {
                      homeIcon(), setSearchfilter(false);
                    }}
                  >
                    <div className="custom-div text-center">
                      <HomeOutlinedIcon style={{ color: '#727272' }} />

                      <p style={{ fontSize: '3vw', color: '#727272' }}>Home</p>
                    </div>
                  </button>
                ) : (
                  <button className="c-btn">
                    <div className="custom-div2 text-center">
                      <HomeOutlinedIcon style={{ color: '#e37d32' }} />
                      <p style={{ color: '#e37d32', fontSize: '3vw' }}>Home</p>
                    </div>
                  </button>
                )}
              </div>
            </Link>

            <div className="col d-flex justify-content-center">
              {hoverSearchIcon ? (
                <button
                  className="c-btn"
                  onClick={() => {
                    SearchIcon(), setSearchfilter(true);
                  }}
                >
                  <div className="custom-div text-center">
                    <SearchOutlinedIcon style={{ color: '#727272' }} />
                    <p style={{ fontSize: '3vw', color: '#727272' }}>Search</p>
                  </div>
                </button>
              ) : (
                <button className="c-btn">
                  <div className="custom-div2 text-center">
                    <SearchOutlinedIcon style={{ color: '#e37d32' }} />
                    <p style={{ color: '#e37d32', fontSize: '3vw' }}>Search</p>
                  </div>
                </button>
              )}
            </div>

            <Link href="/SavedProperties">
              <div className="col d-flex justify-content-center">
                {hoverSavedIcon ? (
                  <button
                    className="c-btn"
                    onClick={() => {
                      SavedIcon(), setSearchfilter(false);
                    }}
                  >
                    <div className="custom-div text-center">
                      <FavoriteBorderOutlinedIcon
                        style={{ color: '#727272' }}
                      />
                      <p style={{ fontSize: '3vw', color: '#727272' }}>Saved</p>
                    </div>
                  </button>
                ) : (
                  <button className="c-btn">
                    <div className="custom-div2 text-center">
                      <FavoriteBorderOutlinedIcon
                        style={{ color: '#e37d32' }}
                      />
                      <p style={{ color: '#e37d32', fontSize: '3vw' }}>Saved</p>
                    </div>
                  </button>
                )}
              </div>
            </Link>

            <div className="col d-flex justify-content-center">
              {hoverAccountIcon ? (
                <button
                  className="c-btn"
                  onClick={() => {
                    token == null
                      ? (setloginOpen(true),
                        AccountIcon(),
                        setSearchfilter(false))
                      : null;
                  }}
                >
                  <div
                    className="custom-div text-center"
                    onClick={() =>
                      token == null
                        ? (setloginOpen(true), AccountIcon())
                        : setaccount(true)
                    }
                  >
                    <PersonOutlinedIcon style={{ color: '#727272' }} />
                    <p style={{ fontSize: '3vw', color: '#727272' }}>Account</p>
                  </div>
                </button>
              ) : (
                <button className="c-btn">
                  <div
                    className="custom-div2 text-center"
                    // onClick={() =>
                    //   token == null ? setloginModal(true) : null
                    // }
                  >
                    <PersonOutlinedIcon style={{ color: '#e37d32' }} />
                    <p style={{ color: '#e37d32', fontSize: '3vw' }}>Account</p>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <Modal
        open={loginOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LoginModal close={handleClose} />
        </Box>
      </Modal>
    </>
  );
}

export default Bottom_bar;
