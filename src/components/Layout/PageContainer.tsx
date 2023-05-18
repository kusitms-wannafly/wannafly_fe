import { ReactNode } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { Header } from '@components/Layout/Header';

interface ListProps {
  children: ReactNode;
  header?: boolean;
}

export const PageContainer = ({ children, header }: ListProps) => {
  return (
    <PageContainerBox>
      <ThemeProvider theme={theme}>
        {header === undefined ? null : <Header />}
        {children}
      </ThemeProvider>
    </PageContainerBox>
  );
};

const PageContainerBox = styled.div`
  min-width: 1200px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
  position: relative;
`;
