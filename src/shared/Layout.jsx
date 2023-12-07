import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as St from './Layout.style';

export default function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <St.HeaderWrapper>
        <St.HeaderTitleLogo
          onClick={() => {
            navigate('/');
          }}
        ></St.HeaderTitleLogo>
      </St.HeaderWrapper>
      <Outlet />
      <div>Footer</div>
    </>
  );
}
