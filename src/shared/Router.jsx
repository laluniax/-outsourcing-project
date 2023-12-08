import Layout from 'shared/Layout';
import Home from 'pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Search from 'components/Search';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
