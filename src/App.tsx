import { GlobalStyle } from './styles/global-style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { MainPage } from '@pages/Main/MainPage';
import { NoMatchPage } from '@pages/NoMatch/NoMatchPage';
//임시 페이지
import { MemberPage } from '@pages/Member/MemberPage';

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
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
