import Layout from 'shared/Layout';
import Home from 'pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Detail from 'pages/Detail';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
