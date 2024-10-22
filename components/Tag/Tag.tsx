import React, { FC } from 'react';
import { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

const Tag: FC<TagProps> = ({
  size = 'small',
  children,
  href,
  color = 'ghost',
  ...props
}): JSX.Element => {
  const classes = {
    [styles.small]: size == 'small',
    [styles.medium]: size == 'medium',
    [styles.ghost]: color == 'ghost',
    [styles.red]: color == 'red',
    [styles.grey]: color == 'grey',
    [styles.green]: color == 'green',
    [styles.primary]: color == 'primary',
  };
  return (
    <div className={cn(styles.tag, classes)} {...props}>
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
