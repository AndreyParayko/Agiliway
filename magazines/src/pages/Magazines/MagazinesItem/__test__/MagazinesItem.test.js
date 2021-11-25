import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

import MagazinesItem from '../MagazinesItem';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a name', () => {
  act(() => {
    render(
      <Router>
        <MagazinesItem />
      </Router>,
      container,
    );
  });
  expect(container.querySelector('.ant-card-meta-title')).toBe(null);
  expect(container.querySelector('.ant-card-meta-description')).toBe(null);

  act(() => {
    render(<Router><MagazinesItem name="Margaret" /></Router>, container);
  });
  expect(container.querySelector('.ant-card-meta-title').textContent).toBe('Margaret');
  expect(container.querySelector('.ant-card-meta-description')).toBe(null);
});
