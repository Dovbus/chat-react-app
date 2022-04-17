import React from 'react';
import clsx from 'clsx';
import './Loader.scss';

export default function Loader({ className }) {
  const classes = clsx('spinner', className);
  return (
    <svg
      className={classes}
      width="65px"
      height="65px"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="path"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  );
}
