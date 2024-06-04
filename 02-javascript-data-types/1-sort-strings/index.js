/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
function sortStrings(arr, param = "asc") {
  let k;
  param === "asc" ? (k = 1) : (k = -1);
  return arr.sort((a, b) => k * a.localeCompare(b, "ru-en"));
}
console.log(
  sortStrings(["Абрикос", "абрикос", "Ёжик", "ёжик", "Яблоко", "яблоко"])
);
