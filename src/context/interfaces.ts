export interface IPropsCommentsContext {
  children: JSX.Element;
}
export interface IComments {
  id: number;
  user: string;
  image: string;
  description: string;
  points: number;
  date: string;
  isComment: boolean;
  isReplaying: boolean;
  replys: IComments[];
}

export interface IContextState {
  comments: IComments[];
}

export interface IUserContextState {
  user: IUser | null;
}
export interface IUser {
  nickname: string;
  image: any;
}
