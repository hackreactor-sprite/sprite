export default function handleContentLoad({
  partialList,
  setPartialList,
  totalList,
}) {
  const partial = [...partialList].length + 1;
  for (let i = partial; i < partial + 2; i += 1) {
    if (totalList[i]) {
      setPartialList([totalList[i], ...partialList]);
    }
  }
}
