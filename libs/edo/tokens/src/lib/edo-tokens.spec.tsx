import React from 'react';
import { render } from '@testing-library/react';

import EdoTokens from './edo-tokens';

describe('EdoTokens', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EdoTokens />);
    expect(baseElement).toBeTruthy();
  });
});
