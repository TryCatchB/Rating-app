import { useMemo } from 'react';
import cn from 'classnames';
import { useRatingProps } from './useRating.props';
import StarIcon from '../star.svg';
import styles from '../Rating.module.css';

const useRating = (data: useRatingProps): JSX.Element[] => {
  const {
    displayRating,
    isEditable,
    changeDisplay,
    resetDisplay,
    handleClick,
    handleSpace,
  } = data;

  const ratingArray = useMemo(() => {
    return new Array(5).fill(0).map((_, i) => {
      const combinedStyles = cn(styles.star, {
        [styles.filled]: i < displayRating,
        [styles.editable]: isEditable,
      });

      return (
        <span
          key={i}
          className={combinedStyles}
          onMouseEnter={isEditable ? () => changeDisplay(i + 1) : undefined}
          onMouseLeave={isEditable ? () => resetDisplay() : undefined}
          onClick={isEditable ? () => handleClick(i + 1) : undefined}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e) => isEditable && handleSpace(i + 1, e)}
          />
        </span>
      );
    });
  }, [displayRating, isEditable]);

  return ratingArray;
};

export default useRating;
