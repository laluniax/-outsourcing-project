import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
}
