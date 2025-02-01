'use client';

import cn from 'classnames';
import { getMenu } from '@/api/menu';
import styles from './styles/utils.module.css';
import { useEffect, useState } from 'react';
import ThirdLevel from './ThirdLevel';
import { MenuItem } from '@/interfaces/menu.interface';

interface FirstLevelMenuItem {
  route: string;
  id: number;
}

interface SecondLevelProps {
  menuItem: FirstLevelMenuItem;
  pathName: string;
}

const SecondLevel: React.FC<SecondLevelProps> = ({ menuItem, pathName }) => {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getMenu(menuItem.id);
        const updatedMenu = data.map((m) => ({ ...m, isOpened: false }));
        setMenu(updatedMenu);
      } catch (error) {
        console.error('Ошибка загрузки меню:', error);
      }
    };

    fetchMenu();
  }, [menuItem.id]);

  const openSecondLevel = (secondCategory: string) => {
    setMenu((prevMenu) =>
      prevMenu.map((m) =>
        m._id.secondCategory === secondCategory
          ? { ...m, isOpened: !m.isOpened }
          : m,
      ),
    );
  };

  return (
    <div className={styles.secondBlock}>
      {menu.map((m) => {
        return (
          <div key={m._id.secondCategory}>
            <div
              className={styles.secondLevel}
              onClick={() => openSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              <ThirdLevel
                pages={m.pages}
                route={menuItem.route}
                pathName={pathName}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SecondLevel;
