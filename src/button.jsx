import React, { memo } from 'react';

export const Button = memo((props) => {
  console.log('button rerender');
  return <button {...props}>{props.buttonName}</button>;
});
