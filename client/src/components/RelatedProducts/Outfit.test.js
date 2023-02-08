// import react-testing methods
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
  beforeEach, describe, expect, test,
} from '@jest/globals';
import Outfit from './Outfit';
import {
  styleMock, metadataMock, productMock, outfitsMock,
} from './mockData';

describe('Outfit component test', () => {
  let style;
  let metadata;
  let curProduct;
  let mockOutfits;
  let setOutfitsMock;

  beforeEach(() => {
    style = styleMock;
    metadata = metadataMock;
    curProduct = productMock;
    mockOutfits = outfitsMock;
    setOutfitsMock = jest.fn();
  });

  test('should have x delete outfit button', async () => {
    render(<Outfit style={style} curProduct={curProduct} metadata={metadata} />);
    const button = await screen.getByRole('button');
    expect(button.innerHTML).toBe('X');
  });

  test('should invoke handleDeleteOutfit helper function upon click', async () => {
    render(
      <Outfit
        style={style}
        curProduct={curProduct}
        metadata={metadata}
        outfits={mockOutfits}
        setOutfits={setOutfitsMock}
      />,
    );
    const button = await screen.getByRole('button');
    // click button
    await userEvent.click(button);
    // check setOutfitsMock has been called;
    expect(setOutfitsMock).toBeCalled();
  });

  // test.todo('should have outfitPlaceholder on first rendering', async () => {
  //   render(<RelatedProducts style={style1} curProduct={curProduct1} metadata={metadata1} relatedProds={relatedProds1} />);
  //   expect(document.getElementById('outfitPlaceholder')).toBeTruthy();
  // });
});
