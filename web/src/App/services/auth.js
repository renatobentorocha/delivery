export const TOKEN_KEY = '@delivery-token';
export const TOKEN_USER = '@delivery-user';

export const isAuthenticated = () => {
  return localStorage.getItem(TOKEN_KEY) !== null;
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getUser = () => JSON.parse(localStorage.getItem(TOKEN_USER));

export const login = (user) => {
  localStorage.setItem(TOKEN_USER, JSON.stringify(user));
  localStorage.setItem(TOKEN_KEY, user.token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_USER);
};
