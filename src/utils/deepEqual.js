function isObject(object) {
  return object != null && typeof object === 'object';
}

export function deepEqual(object1 = {}, object2 = {}) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 != val2)
    ) {
      return false;
    }
  }

  return true;
}

export const compareObj = (object = {}) => {
  const keys = Object.keys(object);
  if (!keys.length) return false;
  let key = keys[0];
  let firstObj = JSON.stringify(object[key]);
  let index = keys.findIndex((o) => JSON.stringify(object[o]) != firstObj);
  return index > -1 ? true : false;
};

export const removeDuplicates = (array) => {
  return (array || []).filter(function (element, index, self) {
    return index === self.indexOf(element);
  });
};
