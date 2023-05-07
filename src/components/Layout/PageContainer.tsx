import { ReactNode } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { Header } from '@components/Layout/Header';
import { Banner } from '@components/Layout/Banner';

interface ListProps {
  children: ReactNode;
  header?: boolean;
  banner?: boolean;
}

export const PageContainer = ({ children, header, banner }: ListProps) => {
  return (
    <PageContainerBox>
      <ThemeProvider theme={theme}>
        {header === false ? null : <Header />}
        {banner === false ? null : <Banner />}
        {children}
      </ThemeProvider>
    </PageContainerBox>
  );
};

const PageContainerBox = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f8fd;
`;
