export default function comparing(curProd, relProd) {
  const result = [];
  const allChars = curProd.concat(relProd);
  const uniqueChars = [...new Set(allChars.map((char) => `${char.value} ${char.feature}`))];
  const curProdChars = curProd.map((char) => `${char.value} ${char.feature}`);
  const relProdChars = relProd.map((char) => `${char.value} ${char.feature}`);
  for (let i = 0; i < uniqueChars.length; i++) {
    const curChar = uniqueChars[i];
    const char = {
      name: curChar,
      curProd: (curProdChars.indexOf(curChar) > -1),
      relProd: (relProdChars.indexOf(curChar) > -1),
    };
    result.push(char);
  }
  return result;
}
