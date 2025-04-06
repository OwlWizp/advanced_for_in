export const swordman = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderByProps(obj, sort) {
  const result1 = [];
  const result2 = [];
  const sortKey = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      sort.forEach((item) => {
        if (item === key) {
          result1.push({ key, value: obj[key] });
          sortKey.key = key;
        }
      });
      if (key !== sortKey.key) {
        result2.push({ key, value: obj[key] });
      }
    }
  }

  result2.sort((a, b) => (a.key > b.key ? 1 : -1));
  return result1.concat(result2);
}
