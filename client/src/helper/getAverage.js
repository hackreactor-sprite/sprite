export default function getAverage(rates) {
  let total = 0;
  let sum = 0;
  for (let i = 0; i < Object.keys(rates).length; i += 1) {
    const score = Object.keys(rates)[i];
    sum += Number(score) * Number(rates[score]);
    total += Number(rates[score]);
  }
  const average = sum / total;
  return Number((Math.round(average * 4) / 4).toFixed(2));
}
