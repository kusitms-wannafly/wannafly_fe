import { GlobalStyle } from './styles/global-style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage } from '@pages/Main/MainPage';
import { NoMatchPage } from '@pages/NoMatch/NoMatchPage';
import { ApplyPage } from '@pages/Main/ApplyPage';
import { CategoryPage } from '@pages/Main/CategoryPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NoMatchPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/Category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
