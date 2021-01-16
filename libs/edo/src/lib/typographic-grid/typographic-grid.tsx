import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TypographicGridProps {}

const StyledTypographicGrid = styled.div`
  color: pink;
`;

export function TypographicGrid(props: TypographicGridProps) {
  return (
    <StyledTypographicGrid>
      <h1>Welcome to TypographicGrid!</h1>
    </StyledTypographicGrid>
  );
}

export default TypographicGrid;
