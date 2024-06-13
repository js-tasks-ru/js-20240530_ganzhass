/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size < 1 || string === "") return "";
  if (!size) return string;
  let currLetter = 0;
  let newStr = string[0];
  for (let i = 1; i < string.length; i++) {
    string[i] === string[i - 1] ? currLetter++ : (currLetter = 0);
    currLetter < size ? (newStr = newStr + string[i]) : null;
  }
  return newStr;
}
