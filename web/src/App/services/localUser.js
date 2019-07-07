export const TOKEN_USER = '@delivery-user';

export const getUser = () => localStorage.getItem(TOKEN_USER);

export const login = (user) => {
  localStorage.setItem(TOKEN_USER, user);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_USER);
};
