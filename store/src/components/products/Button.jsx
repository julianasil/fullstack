import React from 'react';
import clsx from 'clsx';

const Button = ({ name, onClick, className="" }) => {
  return (
    <div>
        <button onClick={onClick} className={clsx(className, "")}></button>
    </div>
  )
}

export default Button;
