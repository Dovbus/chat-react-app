import React from 'react';
import clsx from 'clsx';

export default function Input(props) {
  const { type = 'text', placeholder, label, className, ...rest } = props;
  const classes = clsx('search', className);
  return (
    <input
      className={classes}
      type={type}
      placeholder={placeholder}
      autoComplete="false"
      {...rest}
    />
  );
}
