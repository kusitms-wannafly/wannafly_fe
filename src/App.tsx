import { GlobalStyle } from './styles/global-style';
import GlobalFonts from './assets/fonts/fonts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { MainPage } from '@pages/Main';
import { ApplicationsPage } from '@pages/Applications';
import { NoMatchPage } from '@pages/NoMatch/NoMatchPage';
import { ApplicationWritePage } from '@pages/ApplicationWrite';
import { ApplicationEditPage } from '@pages/ApplicationEdit';
import { CategorizePage } from '@pages/Categorize';

import { LoginRedirect } from '@features/oauth/LoginRedirect';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <GlobalFonts />
        <Routes>
          <Route path="/token" element={<LoginRedirect />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/applications/:year" element={<ApplicationsPage />} />
          <Route path="/write" element={<ApplicationWritePage />} />
          <Route path="/edit/:formId" element={<ApplicationEditPage />} />
          <Route path="/categorize" element={<CategorizePage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
