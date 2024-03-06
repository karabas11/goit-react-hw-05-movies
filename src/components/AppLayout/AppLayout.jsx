import { Outlet } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  HeaderStyled,
  NavLinkStyled,
  NavStyled,
  StyledLink,
} from './AppLayout.styled';
import Loader from 'components/Loader';

export const AppLayout = () => {
  return (
    <>
      <HeaderStyled>
        <NavStyled>
          <NavLinkStyled>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </NavLinkStyled>
        </NavStyled>
      </HeaderStyled>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </>
  );
};
