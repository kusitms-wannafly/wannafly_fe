import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { getApplicationDetailAPI } from '@api/applicationAPIS';

interface applicationItem {
  applicationItemId: number;
  applicationQuestion: string;
  applicationAnswer: string;
}
interface applicationForm {
  recruiter: string;
  year: number;
  semester: 'first_half' | 'second_half';
  applicationItems: applicationItem[];
}

interface propsType {
  selectedDetailFormId: number;
}
export const ApplicationDetailBox = ({ selectedDetailFormId }: propsType) => {
  const [applicationForm, setApplicationForm] = useState<applicationForm>();

  useEffect(() => {
    const apireturn = getApplicationDetailAPI(selectedDetailFormId);
    apireturn.then((res) => {
      setApplicationForm(res);
    });
  }, []);

  return (
    <DetailBoxContainer>
      <DetailHeader>{applicationForm?.recruiter}</DetailHeader>
    </DetailBoxContainer>
  );
};

const DetailBoxContainer = styled.div``;

const DetailHeader = styled.div`
  border: 1px solid blue;
  width: 100%;
`;
