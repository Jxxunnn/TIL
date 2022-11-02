function solution(cacheSize, cities) {
  var answer = 0;
  const cache = [];
  if (cacheSize === 0) return 5 * cities.length;
  for (const city of cities) {
    const cityLC = city.toLowerCase();
    if (cache.includes(cityLC)) {
      cache.splice(cache.indexOf(cityLC), 1);
      cache.unshift(cityLC);
      answer += 1;
    } else {
      if (cache.length >= cacheSize) cache.pop();
      cache.unshift(cityLC);
      answer += 5;
    }
  }
  return answer;
}
console.log(solution(4, ["Jeju", "Pangyo", "NewYork", "newyork"])); // 16
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); // 25
console.log(solution(3, ["A", "B", "A"])); // 11
console.log(solution(10, ["1", "2", "3", "2"])); // 16
console.log(solution(0, ["A", "B", "A", "A", "A"])); // 25
