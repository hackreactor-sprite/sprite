export function handleAddOutfit(ev, curStyle, outfits, setOutfits) {
  ev.preventDefault();
  if (outfits.filter((outfit) => outfit.style_id === curStyle.style_id).length === 0) {
    setOutfits([...outfits, curStyle]);
  }
}
export function handleDeleteOutfit(ev, outfits, setOutfits) {
  ev.preventDefault();
  const updatedOutfits = outfits.filter(
    (outfit) => outfit.style_id !== Number(ev.target.parentElement.id),
  );
  setOutfits(updatedOutfits);
}
