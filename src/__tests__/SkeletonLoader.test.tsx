import React from 'react';
import { render } from '@testing-library/react';
import SkeletonLoader from '../SkeletonLoader';

describe('SkeletonLoader', () => {
  it('renders the skeleton loader with default shimmer animation', () => {
    const { getByTestId } = render(<SkeletonLoader width="200px" height="20px" />);
    const skeleton = getByTestId('skeleton-loader'); // Should find the skeleton

    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveStyle('width: 200px');
  });

  it('renders a circular skeleton loader when isCircle is true', () => {
    const { getByTestId } = render(<SkeletonLoader width="100px" height="100px" isCircle />);
    const skeleton = getByTestId('skeleton-loader');

    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveStyle('border-radius: 50%');
  });

  it('renders the pulse animation when pulse prop is true', () => {
    const { getByTestId } = render(<SkeletonLoader width="200px" height="20px" pulse />);
    const skeleton = getByTestId('skeleton-loader');

    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('pulse-animation');
  });
});
