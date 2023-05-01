import { GlobalStyle } from './styles/global-style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage } from '@pages/Main/MainPage';
import { NoMatchPage } from '@pages/NoMatch/NoMatchPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
