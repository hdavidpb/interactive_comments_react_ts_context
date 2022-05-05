import React, { useContext, useState } from "react";
import { commentsContext } from "../context/CommentsContext";

interface IProps {
  pointValue: number;
  isComment: boolean;
  id: number;
}

const useCounterPointsComments = ({ pointValue, isComment, id }: IProps) => {
  const [counterPoints, setCounterPoints] = useState<number>(pointValue);

  const { handleChangePoints } = useContext(commentsContext);

  const handleIncreasePoints = () => {
    setCounterPoints((prev) => {
      const newPrev = prev + 1;
      handleChangePoints(newPrev, id, isComment);
      return newPrev;
    });
  };

  const handleDecreasePoints = () => {
    setCounterPoints((prev) => {
      if (prev > 0) {
        handleChangePoints(prev - 1, id, isComment);
        return prev - 1;
      } else {
        handleChangePoints(prev, id, isComment);
        return prev;
      }
    });
  };

  return { counterPoints, handleIncreasePoints, handleDecreasePoints };
};

export default useCounterPointsComments;
