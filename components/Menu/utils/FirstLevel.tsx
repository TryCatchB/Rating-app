import Link from 'next/link';
import cn from 'classnames';
import styles from './styles/utils.module.css';
import SecondLevel from './SecondLevel';
import { firstLevelMenu } from '../../../helpers/levelMenu/firstLevelMenu';

interface FirstLevelProps {
  pathName: string;
}

const FirstLevel: React.FC<FirstLevelProps> = ({ pathName }) => {
  const firstCategory = firstLevelMenu[0].id; // Предполагаем, что первый элемент всегда актуален

  return (
    <>
      {firstLevelMenu.map((m) => (
        <div key={m.route}>
          <Link href={`/${m.route}`}>
            <div
              className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: m.id === firstCategory,
              })}
            >
              {m.icon}
              <span>{m.name}</span>
            </div>
          </Link>
          {m.id === firstCategory && (
            <SecondLevel menuItem={m} pathName={pathName} />
          )}
        </div>
      ))}
    </>
  );
};

export default FirstLevel;
