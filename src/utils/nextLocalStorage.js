function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

const NextStorage = {
  getItem(key) {
    if (typeof localStorage !== 'undefined') {
      const value = localStorage.getItem(key);
      if (value !== '' && value !== undefined && value !== null) {
        if (IsJsonString(value)) {
          return JSON.parse(value);
        }
        return value;
      }
    }
    return null;
  },
  has(key) {
    return !!NextStorage.getItem(key);
  },
  setItem(key, value) {
    if (typeof localStorage !== 'undefined') {
      const item = typeof value === 'string' ? value : JSON.stringify(value);
      localStorage.setItem(key, item);
    }
  },
  updateObject(key, change) {
    if (typeof localStorage !== 'undefined' && typeof change != 'undefined') {
      const data = NextStorage.getItem(key);
      const update = change(Object.assign({}, data));
      if (typeof update != 'undefined' && update) {
        NextStorage.setItem(key, update);
      }
    }
  },
};

export default NextStorage;
