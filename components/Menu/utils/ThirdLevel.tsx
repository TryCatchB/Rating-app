import cn from 'classnames';
import Link from 'next/link';
import styles from './styles/utils.module.css';

interface PageItem {
  _id: string;
  alias: string;
  category: string;
}

interface ThirdLevelProps {
  pages: PageItem[];
  route: string;
  pathName: string;
}

const ThirdLevel: React.FC<ThirdLevelProps> = ({ pages, route, pathName }) => {
  return (
    <>
      {pages.map((p) => {
        const isActive = pathName === `/${route}/${p.alias}`;

        return (
          <Link
            key={p._id}
            href={`/${route}/${p.alias}`}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: isActive,
            })}
          >
            {p.category}
          </Link>
        );
      })}
    </>
  );
};

export default ThirdLevel;
