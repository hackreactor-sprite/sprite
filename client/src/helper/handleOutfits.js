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

// calls `preventDefault` from ev argument
// generates updatedOutfits based on ev.target.parentElement.id;
// call setOutfits argument with the updatedOutfits

/*
  const preventDefaultStub = new Stub();
  const mockEv = {
    target: {
      parentElement: {
        id: 1,
      }
    }
    preventDefault: preventDefaultStub // should be a function stub
  };

  const mockOutfits = [
    { style_id: 0 },
    { style_id: 1 },
    { style_id: 2 },
  ];

  const setOutfitsStub = new Stub();

  const result = handleDeleteOutfits(mockEv, mockOutfits, setOutfitsStub);

  // Should call preventDefault on event
  assert(preventDefaultStub.calledExactlyOnce).toBe(true);

  // Should call setOutfits argument
  assert(setOutfitsStub.calledExactlyOnce).toBe(true);

  // setOutfits is called with correct updated outfits
  assert(setOutfits.calledWith()).toBeEqualTo([{ style_id: 0 }, { style_id: 2 }]);
  assert(setOutfits.calledWith()).toNotContain({ style_id: 1 });
*/
