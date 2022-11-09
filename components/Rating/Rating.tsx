import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";
import { Fragment, useState, useEffect } from "react";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setratingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);

    return () => {};
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
          })}
        />
      );
    });
    setratingArray(updatedArray);
  };
  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <Fragment key={i}>{r}</Fragment>
      ))}
    </div>
  );
};
