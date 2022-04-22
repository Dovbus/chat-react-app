import React from 'react';
import clsx from 'clsx';
import '../../scss/App.scss';

export default function Button(props) {
  const { outline, className, children, ...rest } = props;
  const classes = clsx({ button: !outline, outline: outline }, className);
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
