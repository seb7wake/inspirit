export type UserSignUpRequest = {
  name: string;
  email: string;
  password: string;
};

export type UserSignInRequest = {
  email: string;
  password: string;
};
