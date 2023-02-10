import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import GalleryThumbnails from '../../../src/components/Products/GalleryThumbnails';

const picture = {
  thumbnail_url: 'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  url: 'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
};

const i = 5;

test('should render the current products slogan and description', async () => {
  render(<GalleryThumbnails picture={picture} i={i} />);
  const image = await screen.getByRole('img', {
    name: 'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
  });
  expect(image.id).toBe('5');
});

// need to do click handler test
