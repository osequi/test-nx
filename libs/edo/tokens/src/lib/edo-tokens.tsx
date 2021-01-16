import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface EdoTokensProps {}

const StyledEdoTokens = styled.div`
  color: pink;
`;

export function EdoTokens(props: EdoTokensProps) {
  return (
    <StyledEdoTokens>
      <h1>Welcome to edo-tokens!</h1>
    </StyledEdoTokens>
  );
}

export default EdoTokens;
