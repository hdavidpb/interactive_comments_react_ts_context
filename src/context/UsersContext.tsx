import React, { createContext, useState } from "react";
import { IUserContextState } from "./interfaces";
import profile1 from "../assets/interactive-comments-section-main/images/avatars/image-amyrobson.png";

const initialState: IUserContextState = {
  user: null,
};
export const usersContext = createContext(initialState);

interface IProps {
  children: JSX.Element;
}
const UserContext = ({ children }: IProps) => {
  const [userState, setUSerState] = useState<IUserContextState>({
    user: { image: profile1, nickname: "hdavidpb" },
  });

  return (
    <usersContext.Provider value={userState}>{children}</usersContext.Provider>
  );
};

export default UserContext;
