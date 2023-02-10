export default function handleContentLoad({
  partialList,
  setPartialList,
  totalList,
}) {
  const partial = [...partialList].length;
  const itemsToAdd = [];

  for (let i = partial; i < partial + 2; i += 1) {
    if (totalList[i]) {
      itemsToAdd.push(totalList[i]);
    }
  }

  setPartialList([...partialList, ...itemsToAdd]);
}
