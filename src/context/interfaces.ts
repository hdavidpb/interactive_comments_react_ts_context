export interface IPropsCommentsContext {
  children: JSX.Element;
}
export interface IComments {
  id: number;
  user: string;
  image: string;
  description: string;
  points: number;
  replys: IComments[];
}

export interface IContextState {
  comments: IComments[];
}
