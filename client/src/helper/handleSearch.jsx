export default function handleSearch({ e, search, list, setPartialList }) {
  if (search.length > 3 || e.key === 'Enter') {
    let newList = [...list];
    newList = newList.filter((question) => {
      const body = question.question_body.toLowerCase();
      return body.includes(search.toLowerCase());
    });
    setPartialList(newList.slice(0, 4));
  }
}
