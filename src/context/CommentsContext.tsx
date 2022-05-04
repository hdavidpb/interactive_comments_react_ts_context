import React, { createContext, useState } from "react";
import { IContextState, IPropsCommentsContext } from "./interfaces";

const initialState: IContextState = {
  comments: [],
};
export const commentsContext = createContext(initialState);

const CommentsContext = ({ children }: IPropsCommentsContext) => {
  const [commentsState, setCommentsState] = useState<IContextState>({
    comments: [
      {
        description: "hola mundo",
        id: 1,
        image: "nada.jpg",
        points: 4,
        user: "hdavidpb",
        replys: [],
      },
    ],
  });

  return (
    <commentsContext.Provider value={commentsState}>
      {children}
    </commentsContext.Provider>
  );
};

export default CommentsContext;
