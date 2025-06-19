import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';
import '@testing-library/jest-dom';

describe('ErrorBoundary', () => {
  it('renders children without error', () => {
    const { asFragment, getByText } = render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );

    expect(getByText('Test content')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });


  it('renders fallback UI on error', () => {
   

    const ProblemChild = () => {
      throw new Error('Test error');
    };

    const { asFragment, getByText } = render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );

    expect(getByText('Помилка!')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
