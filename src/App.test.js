import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('testing', () => {
  it('you should test changes in the Web Preview', async () => {
    expect(true).toBe(true);
  });
});
