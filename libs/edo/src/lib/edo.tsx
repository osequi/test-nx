import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface EdoProps {}

const StyledEdo = styled.div`
  color: pink;
`;

export function Edo(props: EdoProps) {
  return (
    <StyledEdo>
      <h1>Welcome to edo!</h1>
    </StyledEdo>
  );
}

export default Edo;
