import React, { FC } from 'react';
import buildFirstLevel from './utils/buildFirstLevel';
import styles from './Menu.module.css';

const Menu: FC = async (): Promise<JSX.Element> => {
  return <nav className={styles.menu}>{buildFirstLevel()}</nav>;
};

export default Menu;
