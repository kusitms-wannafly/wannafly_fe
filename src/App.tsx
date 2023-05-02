import { GlobalStyle } from './styles/global-style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { MainPage } from '@pages/Main/MainPage';
import { NoMatchPage } from '@pages/NoMatch/NoMatchPage';
//임시 페이지
import { MemberPage } from '@pages/Member/MemberPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NoMatchPage />} />
          <Route path="/member" element={<MemberPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
