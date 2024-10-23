import React, { FC } from 'react';
import cn from 'classnames';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import styles from './Button.module.css';

const Button: FC<ButtonProps> = ({
  appearance,
  children,
  arrow = 'none',
  ...props
}): JSX.Element => {
  const classes = {
    [styles.down]: arrow == 'down',
    [styles.right]: arrow == 'right',
    [styles.ghost]: appearance == 'ghost',
    [styles.primary]: appearance == 'primary',
  };

  return (
    <button className={cn(styles.button, classes)} {...props}>
      {children}

      {arrow !== 'none' && (
        <span className={cn(styles.arrow, classes)}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
