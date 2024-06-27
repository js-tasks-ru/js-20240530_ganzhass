/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
// new commit

export function createGetter(path) {
  const props = path.split(".");
  return function (obj) {
    let newObj = obj;
    for (const prop of props) {
      if (!Object.hasOwn(newObj, prop)) {
        return;
      }
      newObj = newObj[prop];
    }
    return newObj;
  };
}
