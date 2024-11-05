import cn from 'classnames';
import Link from 'next/link';
import { PageItem } from '@/interfaces/menu.interface';
import styles from './styles/utils.module.css';

const buildThirdLevel = (pages: PageItem[], route: string) => {
  return pages.map((p) => {
    const combinedStyles = cn(styles.thirdLevel, {
      [styles.thirdLevelActvive]: false,
    });

    return (
      <Link
        key={p._id}
        href={`/${route}/${p.alias}`}
        className={combinedStyles}
      >
        {p.category}
      </Link>
    );
  });
};

export default buildThirdLevel;
