import React, { createContext } from "react";

interface IComments {
  id: number;
  user: string;
  image: string;
  description: string;
  points: number;
  replys: IComments[];
}

interface IContextState {
  comments: IComments[];
}

const CommentsContext = () => {
  return <div>CommentsContext</div>;
};

export default CommentsContext;
