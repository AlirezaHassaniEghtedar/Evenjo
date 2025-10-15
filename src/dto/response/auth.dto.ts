export type AuthTokensDto = {
  refresh: string;
  access: string;
};

export type SignUpResponseDto = {
  id: number;
  email: string;
  username: string;
};

export type SignInResponseDto = AuthTokensDto;

