import Link from 'next/link';
import cn from 'classnames';
import { firstLevelMenu } from '../levelMenu/firstLevelMenu';
import { TopLevelCategory } from '@/interfaces/page.interface';
import buildSecondLevel from './buildSecondLevel';
import styles from './styles/utils.module.css';

const buildFirstLevel = (): JSX.Element => {
  const firstCategory = TopLevelCategory.Courses;

  return (
    <>
      {firstLevelMenu.map((m) => {
        const combinedStyles = cn(styles.firstLevel, {
          [styles.firstLevelActive]: m.id === firstCategory,
        });

        return (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <div className={combinedStyles}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        );
      })}
    </>
  );
};

export default buildFirstLevel;
