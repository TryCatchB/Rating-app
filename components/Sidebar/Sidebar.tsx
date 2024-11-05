import React, { FC } from 'react';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import Menu from '../Menu/Menu';

const Sidebar: FC<SidebarProps> = ({ ...props }): JSX.Element => {
  return (
    <aside className={styles.sidebar} {...props}>
      <Menu />
    </aside>
  );
};

export default Sidebar;
