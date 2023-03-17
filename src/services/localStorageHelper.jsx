export const saveInLocalStorage = (key, info) => {
  localStorage.setItem([key], JSON.stringify(info));
};

export const getStorageItem = (key) => {
  const value = localStorage.getItem(key);
  return value && JSON.parse(value);
};
