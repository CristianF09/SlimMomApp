import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { useAuth } from '../../hooks/useAuth';
import {
  BtnList,
  HeaderStyled,
  Logo,
  StyledLink,
  IconButton
} from './Header.styled';
import { BottomSection } from './UserInfo/UserInfo'; // Fixed path
import { Menu } from './Navigation/Navigation'; // Fixed path

// Import logos
import logoMobile from '../../images/logo/logoMobile.png';
import logoMobileRetina from '../../images/logo/logoMobile@2x.png';
import logoTablet from '../../images/logo/logoTablet.png';
import logoTabletRetina from '../../images/logo/logoTablet@2x.png';
import logoDesktop from '../../images/logo/logoDesktop.png';
import logoDesktopRetina from '../../images/logo/logoDesktop@2x.png';

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const { user } = useAuth();
  const userName = user?.name || '';

  // Media Queries
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  // Optimized logo selection
  const logos = {
    mobile: isRetina ? logoMobileRetina : logoMobile,
    tablet: isRetina ? logoTabletRetina : logoTablet,
    desktop: isRetina ? logoDesktopRetina : logoDesktop,
  };
  const logoSrc = isMobile ? logos.mobile : isTablet ? logos.tablet : logos.desktop;

  return (
    <>
      <HeaderStyled>
        <Link to="/">
          <Logo src={logoSrc} alt="SlimMom Logo" />
        </Link>

        {userName ? (
          <>
            {isTablet && <BottomSection name={userName} />}
            {isDesktop && (
              <>
                <Menu setOpenNavigation={setOpenNavigation} />
                <BottomSection name={userName} />
              </>
            )}
            {!isDesktop && (
              <>
                <IconButton onClick={() => setOpenNavigation(prev => !prev)}>
                  {openNavigation ? <RxCross2 /> : <GiHamburgerMenu />}
                </IconButton>
                {openNavigation && <Menu setOpenNavigation={setOpenNavigation} />}
              </>
            )}
          </>
        ) : (
          <BtnList>
            <li>
              <StyledLink to="/login">Log in</StyledLink>
            </li>
            <li>
              <StyledLink to="/registration">Registration</StyledLink>
            </li>
          </BtnList>
        )}
      </HeaderStyled>

      {isMobile && userName && <BottomSection name={userName} />}
    </>
  );
};

export default Header;