import Layout from 'shared/Layout';
import Home from 'pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalColors from 'styles/GlobalColors';
import GlobalFonts from 'styles/GlobalFonts';
import Detail from 'pages/Detail';
import SearchResultPage from 'components/Search/SearchResultPage';

export default function Router() {
  return (
    <>
      <GlobalColors />
      <GlobalFonts />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/mapList/:selectParam/:keyword" element={<SearchResultPage />} />
            <Route path="/mapList/:selectParam" element={<SearchResultPage />} />
            <Route path="/detail" element={<Detail />} />
            {/* <Route path="/search/:keyword" element={<Navigate replace to="/" />} /> */}
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
