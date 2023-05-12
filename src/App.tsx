import { GlobalStyle } from './styles/global-style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { MemberPage } from '@pages/Member/MemberPage';
import { MainPage } from '@pages/Main/MainPage';
import { NoMatchPage } from '@pages/NoMatch/NoMatchPage';
import { ApplyPage } from '@pages/Main/ApplyPage';
import { CategoryPage } from '@pages/Main/CategoryPage';
import { ApplicationPage } from '@pages/Application';

import { GoogleRedirect } from '@features/oauth/GoogleRedirect';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NoMatchPage />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/token" element={<GoogleRedirect />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/Category" element={<CategoryPage />} />
          <Route path="/application" element={<ApplicationPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
