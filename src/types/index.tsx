export interface Credentials {
  user: string;
  password: string;
}

export interface IUserContext {
  user: Credentials | null;
  signIn: (saveLocal: boolean, credentials: Credentials) => void;
  signOut: () => void;
}
