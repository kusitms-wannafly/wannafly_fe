import { GlobalStyle } from './styles/global-style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { MemberPage } from '@pages/Member/MemberPage';

import { MainPage } from '@pages/Main';
import { ApplicationsPage } from '@pages/Applications';
import { NoMatchPage } from '@pages/NoMatch/NoMatchPage';
import { ApplicationWritePage } from '@pages/ApplicationWrite';
import { ApplicationEditPage } from '@pages/ApplicationEdit';

import { GoogleRedirect } from '@features/oauth/GoogleRedirect';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/applications/:year" element={<ApplicationsPage />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/token" element={<GoogleRedirect />} />
          <Route path="/write" element={<ApplicationWritePage />} />
          <Route path="/edit/:formId" element={<ApplicationEditPage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
