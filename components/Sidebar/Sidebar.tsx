import React, { FC } from 'react';
import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';

const Sidebar: FC<SidebarProps> = ({ ...props }): JSX.Element => {
  return (
    <aside className={styles.sidebar} {...props}>
      Sidebar
    </aside>
  );
};

export default Sidebar;
