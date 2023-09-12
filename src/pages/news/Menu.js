import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveLink, setHoveredLink } from 'redux/action/ newsMenu';
import { headerLinksData } from 'utils/headerLinksData';

function Menu() {
  const activeLink = useSelector((state) => state.newsMenu.activeLink);
  const hoveredLink = useSelector((state) => state.newsMenu.hoveredLink);

  const dispatch = useDispatch();

  const handleLinkHover = (index) => {
    dispatch(setHoveredLink(index));
  };

  const handleLinkLeave = () => {
    dispatch(setHoveredLink(null));
  };

  const handleLinkClick = (index) => {
    dispatch(setActiveLink(index));
    localStorage.setItem('activeLink', index);
  };

  useEffect(() => {
    // On page load, check for the activeLink value in local storage
    const storedActiveLink = localStorage.getItem('activeLink');

    // If the storedActiveLink exists and is a valid index, set the active state in Redux
    if (storedActiveLink !== null) {
      const activeLinkFromStorage = parseInt(storedActiveLink, 10);
      dispatch(setActiveLink(activeLinkFromStorage));
    }
  }, []);

  return (
    <div className="news-menu-container">
      <nav className="px-md-4 px-sm-0">
        <ul className="d-flex flex-row">
          {headerLinksData?.map((link, index) => {
            const hasChildren = link.children.length > 0;
            return (
              <React.Fragment key={index}>
                <Link href={'/news/NewsandArticles'}>
                  <li
                    className="mx-2 cursor-pointer"
                    key={index}
                    onMouseEnter={() => handleLinkHover(index)}
                    onMouseLeave={handleLinkLeave}
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      height: '36px',
                      borderBottom:
                        activeLink === index
                          ? '3px solid rgb(25, 70, 155)'
                          : 'none',
                    }}
                    onClick={() => handleLinkClick(index)}
                  >
                    <>{link.name}</>

                    {hasChildren > 0 && hoveredLink === index && (
                      <ul
                        className="sub-links cursor-pointer px-2 py-2 rounded-sm shadow-md"
                        style={{
                          position: 'absolute',
                          zIndex: 999,
                          background: '#ffff',
                          fontWeight: 400,
                          fontSize: 13,
                        }}
                      >
                        {link.children?.map((child, childIndex) => (
                          <React.Fragment key={childIndex}>
                            <Link href={`/news/new-${child.url}`}>
                              <li>{child.name}</li>
                            </Link>
                          </React.Fragment>
                        ))}
                      </ul>
                    )}
                  </li>
                </Link>
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
