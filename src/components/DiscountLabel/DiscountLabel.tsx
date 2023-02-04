import React from 'react';
import './DiscountLabel.scss';

export default function DiscountLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="label">
      <p>-{children}%</p>
    </div>
  );
}
