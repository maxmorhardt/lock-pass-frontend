export interface LoginData {
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
};
