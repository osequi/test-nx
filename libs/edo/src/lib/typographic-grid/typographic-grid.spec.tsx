import React from 'react';
import { render } from '@testing-library/react';

import TypographicGrid from './typographic-grid';

describe('TypographicGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TypographicGrid />);
    expect(baseElement).toBeTruthy();
  });
});
