// import react-testing methods
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
  beforeEach, describe, expect, test,
} from '@jest/globals';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import RelatedProd from './RelatedProd';
import {
  styleMock, metadataMock, productMock, outfitsMock, relatedProductsMock,
} from './mockData';

axios.defaults.baseURL = 'http://localhost:3000';
jest.mock('axios');

describe('RelatedProd component test', () => {
  let id;
  let curProduct;
  let setCurProduct;
  let setDisplayIndex;

  beforeEach(() => {
    id = relatedProductsMock[0].id;
    curProduct = productMock;
    setCurProduct = jest.fn();
    setDisplayIndex = jest.fn();
  });

  test('Render tests', async () => {
    const relatedProductMock = relatedProductsMock[0];
    axios.get.mockResolvedValueOnce({ data: productMock });
    axios.get.mockResolvedValueOnce({ data: styleMock });
    axios.get.mockResolvedValueOnce({ data: metadataMock });
    axios.get.mockResolvedValueOnce({ data: relatedProductMock });

    render(
      <RelatedProd
        id={id}
        curProduct={curProduct}
        setCurProduct={setCurProduct}
        setDisplayIndex={setDisplayIndex}
      />,
    );
    await waitFor(() => {
      // should have a button with classname product
      // query string = search for element who's class="product" and has the attribute role="button" that is an immediate child of a parent element with class="carousel-item"
      const button = document.querySelector('.carousel-item > .product[role="button"]');
      expect(button).toBeTruthy();

      // should have an image with className productPhoto
      const image = document.querySelector('img.productPhoto');
      expect(image).toBeTruthy();
    });
  });

  test('Should display a placeholder image if no image available', async () => {
    const relatedProductMock = relatedProductsMock[0];
    axios.get.mockResolvedValueOnce({ data: productMock });
    axios.get.mockResolvedValueOnce({ data: styleMock });
    axios.get.mockResolvedValueOnce({ data: metadataMock });
    axios.get.mockResolvedValueOnce({ data: relatedProductMock });
    render(
      <RelatedProd
        id={id}
        curProduct={curProduct}
        setCurProduct={setCurProduct}
        setDisplayIndex={setDisplayIndex}
      />,
    );
    await waitFor(() => {
      const image = document.querySelector('img.productPhoto');
      expect(image.getAttribute('alt')).toBe('not found');
    });
  });

  test('Clicking star button opens a modal', async () => {
    const relatedProductMock = relatedProductsMock[0];
    axios.get.mockResolvedValueOnce({ data: productMock });
    axios.get.mockResolvedValueOnce({ data: styleMock });
    axios.get.mockResolvedValueOnce({ data: metadataMock });
    axios.get.mockResolvedValueOnce({ data: relatedProductMock });
    render(
      <RelatedProd
        id={id}
        curProduct={curProduct}
        setCurProduct={setCurProduct}
        setDisplayIndex={setDisplayIndex}
      />,
    );
    await waitFor(async () => {
      expect(document.querySelector('.comparison-modal')).toBeNull();
      const button = document.querySelector('.open-modal-button');
      expect(button).toBeTruthy();
      await userEvent.click(button);
      expect(document.querySelector('.comparison-modal')).toBeTruthy();
    });
  });

  test('Clicking the image calls setCurProduct with new product data', async () => {
    const relatedProductMock = relatedProductsMock[0];
    axios.get.mockResolvedValueOnce({ data: productMock });
    axios.get.mockResolvedValueOnce({ data: styleMock });
    axios.get.mockResolvedValueOnce({ data: metadataMock });
    axios.get.mockResolvedValueOnce({ data: relatedProductMock });

    render(
      <RelatedProd
        id={id}
        curProduct={curProduct}
        setCurProduct={setCurProduct}
        setDisplayIndex={setDisplayIndex}
      />,
    );

    // makes sure all updates related to these “units” have been processed and applied to the DOM before you making any assertions
    await waitFor(async () => {
      const product = document.querySelector('.carousel-item > .product');
      expect(product).toBeTruthy();
      expect(setCurProduct).not.toBeCalled();

      await userEvent.click(product);

      await waitFor(() => expect(setCurProduct).toHaveBeenCalledTimes(1));
      expect(setCurProduct).toBeCalled();
    });
  });
});
