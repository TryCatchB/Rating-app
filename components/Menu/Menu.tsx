'use client';

import React, { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Menu.module.css';
import FirstLevel from './utils/FirstLevel';

const Menu: FC = () => {
  const pathName = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Предотвращаем рендеринг на сервере

  return (
    <nav className={styles.menu}>
      <FirstLevel pathName={pathName} />
    </nav>
  );
};

export default Menu;
