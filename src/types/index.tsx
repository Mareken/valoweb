export interface Credentials {
  user: string;
  password: string;
}

export interface IUserContext {
  user: Credentials | null;
  setUser: React.Dispatch<React.SetStateAction<Credentials>>;
  signIn: (saveLocal: boolean, credentials: Credentials) => void;
  signOut: () => void;
}
