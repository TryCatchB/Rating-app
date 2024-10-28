import React, { FC } from 'react';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';

const Header: FC<HeaderProps> = ({ ...props }): JSX.Element => {
  return <header {...props}>Header</header>;
};

export default Header;
