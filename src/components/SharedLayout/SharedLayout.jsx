import { Header } from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
// import { Background } from "../Background/Background";
export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
