import {
  beforeEach, describe, expect, test,
} from '@jest/globals';
import { handleAddOutfit } from './handleOutfits';

describe('handleOutfits function test', () => {
  let preventDefaultMock;
  let mockEv;
  let mockOutfits;
  let curStyle;
  let setOutfitsMock;

  beforeEach(() => {
    preventDefaultMock = jest.fn();
    mockEv = {
      target: {
        parentElement: {
          id: 1,
        },
      },
      preventDefault: preventDefaultMock,
    };
    mockOutfits = [
      { style_id: 0 },
      { style_id: 1 },
      { style_id: 2 },
    ];
    curStyle = {
      style_id: 240510,
    };
    setOutfitsMock = jest.fn((outfit) => { mockOutfits.push(outfit); });
  });

  test('Should call preventDefault on the first argument', () => {
    // Run function to check if mockEv.preventDefault was run
    handleAddOutfit(mockEv, curStyle, mockOutfits, setOutfitsMock);
    expect(preventDefaultMock).toHaveBeenCalled();
  });

  test('Should call setOutfits function if curStyle is not in outfits', () => {
    handleAddOutfit(mockEv, curStyle, mockOutfits, setOutfitsMock);
    expect(setOutfitsMock).toHaveBeenCalled();
  });

  test('Should not call setOutfits function if curStyle is in outfits', () => {
    curStyle = { style_id: 0 };
    handleAddOutfit(mockEv, curStyle, mockOutfits, setOutfitsMock);
    expect(setOutfitsMock).not.toHaveBeenCalled();
  });
});
