import React from 'react';
import '../../scss/App.scss';

function Container(props) {
  const { children } = props;
  return (
    <div className="container">
      <div className="main">{children}</div>
    </div>
  );
}

export default Container;
