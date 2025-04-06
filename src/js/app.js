export const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

export default function orderByProps(obj, sort) {
    const result1 = [];
    const result2 = [];
    let sortKey;
    for (let key in obj) {
      sort.forEach(item => {
        if (item === key) {
          result1.push({key: key, value: obj[key]});
          sortKey = key;
        } 
      })
      if (key !== sortKey) {
        result2.push({key: key, value: obj[key]});
      }
    }
    
    result2.sort((a, b) => a.key > b.key ? 1 : -1)
    return result1.concat(result2);
  }