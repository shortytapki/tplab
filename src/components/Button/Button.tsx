import React, { MouseEventHandler } from 'react';
import './Button.scss';

export default function Button({
  children,
  arrow,
  active,
  clickHandler,
}: {
  children: React.ReactNode;
  arrow?: boolean;
  active?: boolean;
  clickHandler: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={`button ${arrow ? 'button--arrow' : ''} ${
        active ? 'button--active' : ''
      }`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
