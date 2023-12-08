import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as St from './Layout.style';

export default function Layout() {
  const navigate = useNavigate();

  const handleNavigateAndReload = (path) => {
    // 페이지 이동
    navigate(path);

    // 새로고침
    window.location.reload();
  };

  return (
    <>
      <St.HeaderWrapper>
        <St.HeaderTitleLogo
          onClick={() => {
            handleNavigateAndReload('/');
          }}
        ></St.HeaderTitleLogo>
      </St.HeaderWrapper>
      <Outlet />
      <St.FooterWrapper>
        <p>Copyright 2023. 산책어때 All rights reserved.</p>
      </St.FooterWrapper>
    </>
  );
}
