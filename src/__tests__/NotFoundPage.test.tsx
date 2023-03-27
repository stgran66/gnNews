import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFoundPage } from 'components/NotFoundPage';

describe('NotFoundPage component', () => {
  it('renders the 404 message', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/404/)).toBeInTheDocument();
    expect(
      screen.getByText(/Sorry, the page you visited does not exist./)
    ).toBeInTheDocument();
  });

  it('renders a link to the homepage', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Back Home/)).toHaveAttribute('href', '/');
  });
});
