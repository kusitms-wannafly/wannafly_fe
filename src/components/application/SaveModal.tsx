import styled from 'styled-components';

export const ModalContainer = styled.div``;

export const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.div`
  width: 420px;
  height: 400px;

  background-color: rgba(30, 31, 32, 1);
  border: 1px solid #686a70;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GuideText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.grey1};
  font-size: 16px;

  margin-top: 40px;
`;

export const ApplicationBox = styled.div`
  width: 280px;
  height: 150px;
  margin: 40px 0;

  background-color: #47494b;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ApplicationBoxHeader = styled.div``;

export const ApplicationBoxFooter = styled.div``;

export const BtnsContainer = styled.div``;

export const NoBtn = styled.button`
  width: 160px;
  height: 50px;
  margin: 0 5px;

  border: none;
  border-radius: 4px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.grey6};

  &:hover {
    cursor: pointer;
  }
`;

export const YesBtn = styled.button`
  width: 160px;
  height: 50px;
  margin: 0 5px;

  border: none;
  border-radius: 4px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.navy4};

  &:hover {
    cursor: pointer;
  }
`;
