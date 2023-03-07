import jwtDecode from 'jwt-decode';

interface DecodedToken {
  exp: number;
}

export const isTokenExpired = (token: string) => {
  if (!token) return true;
  const { exp }: DecodedToken = jwtDecode(token);

  if (exp <= Date.now() / 1000) return true;

  return false;
};
