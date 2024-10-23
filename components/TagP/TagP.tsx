import React, { FC } from 'react';
import { PtagProps } from './TagP.props';
import cn from 'classnames';
import styles from './TagP.module.css';

const TagP: FC<PtagProps> = ({
  size = 'medium',
  children,
  ...props
}): JSX.Element => {
  const fonts = cn(styles.text, {
    [styles.small]: size == 'small',
    [styles.medium]: size == 'medium',
    [styles.large]: size == 'large',
  });

  return (
    <p className={fonts} {...props}>
      {children}
    </p>
  );
};

export default TagP;
