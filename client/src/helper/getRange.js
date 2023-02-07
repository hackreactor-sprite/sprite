export default function range(skuObjects, chosenSize) {
  const creatingRange = [];
  let total = skuObjects[chosenSize]?.quantity;
  if (total > 15) {
    total = 15;
  }
  for (let i = 1; i <= total; i += 1) {
    creatingRange.push(i);
  }
  return creatingRange;
}
