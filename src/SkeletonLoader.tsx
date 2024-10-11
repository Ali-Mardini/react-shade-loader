import React from 'react';
import './SkeletonLoader.css';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  isCircle?: boolean;
  className?: string;
  pulse?: boolean;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = '100%',
  height = '20px',
  borderRadius = '4px',
  isCircle = false,
  className = '',
  pulse = false,
}) => {
  const style = {
    width,
    height,
    borderRadius: isCircle ? '50%' : borderRadius,
  };

  return (
    <div
      data-testid="skeleton-loader" 
      className={`skeleton-loader ${className} ${pulse ? 'pulse-animation' : ''}`}
      style={style}
    ></div>
  );
};

export default SkeletonLoader;
