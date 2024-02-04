const default_user = {
  user_id: 'user_1',
  user_name: '민지',
};

export const setCookie = (
  name: string,
  value: string,
  expirationDays: number // 쿠키의 유효 기간
): void => {
  const expires = new Date(
    Date.now() + expirationDays * 24 * 60 * 60 * 1000
  ).toUTCString();

  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
};

export const getCookie = (name: string): string => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }

  setCookie(name, JSON.stringify(default_user), 7);

  return JSON.stringify(default_user);
};

export const removeCookie = (name: string): void => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};
