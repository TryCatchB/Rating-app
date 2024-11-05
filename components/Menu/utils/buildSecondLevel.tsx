import cn from 'classnames';
import { getMenu } from '@/api/menu';
import buildThirdLevel from './buildThirdLevel';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import styles from './styles/utils.module.css';

const buildSecondLevel = async (
  menuItem: FirstLevelMenuItem,
): Promise<JSX.Element> => {
  const firstCategory = TopLevelCategory.Courses;

  const menu = await getMenu(firstCategory);
  return (
    <div className={styles.secondBlock}>
      {menu.map((m) => {
        const combinedStyles = cn(styles.secondLevelBlock, {
          [styles.secondLevelBlockOpened]: m.isOpened,
        });

        return (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div className={combinedStyles}>
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default buildSecondLevel;
