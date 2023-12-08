import Layout from 'shared/Layout';
import Home from 'pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalColors from 'styles/GlobalColors';
import GlobalFonts from 'styles/GlobalFonts';

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
            <Route path="/select/:selectParam/search/:keyword" element={<SearchResultPage />} />
            <Route path="/search/:keyword" element={<Navigate replace to="/" />} />
            <Route path="/select/:selectParam" element={<SearchResultPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
