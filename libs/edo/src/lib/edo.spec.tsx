import React from 'react';
import { render } from '@testing-library/react';

import Edo from './edo';

describe('Edo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Edo />);
    expect(baseElement).toBeTruthy();
  });
});
