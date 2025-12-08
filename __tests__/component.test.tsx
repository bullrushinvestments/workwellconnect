import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (data?: any) => {
    return { data, loading: false, error: null };
  };

  beforeEach(() => {
    (useExternalData as jest.Mock).mockImplementation(mockUseExternalData);
  });

  test('renders component with default state and no errors', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/default text/i)).toBeInTheDocument();
  });

  test('handles loading state correctly', async () => {
    const mockLoading = true;
    (useExternalData as jest.Mock).mockImplementation(() => ({ data: null, loading: mockLoading, error: null }));
    
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  test('handles errors gracefully', async () => {
    const mockError = new Error('Mock error');
    (useExternalData as jest.Mock).mockImplementation(() => ({ data: null, loading: false, error: mockError }));
    
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });

  test('user interaction updates state correctly', () => {
    render(<CoreFunctionalityComponent />);

    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(screen.getByText(/updated text/i)).toBeInTheDocument();
  });

  test('accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label', 'Click Me Button');
  });

  test('edge cases for data handling are covered', () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({ data: [], loading: false, error: null }));
    
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/no items/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (data?: any) => {
    return { data, loading: false, error: null };
  };

  beforeEach(() => {
    (useExternalData as jest.Mock).mockImplementation(mockUseExternalData);
  });

  test('renders component with default state and no errors', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/default text/i)).toBeInTheDocument();
  });

  test('handles loading state correctly', async () => {
    const mockLoading = true;
    (useExternalData as jest.Mock).mockImplementation(() => ({ data: null, loading: mockLoading, error: null }));
    
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  test('handles errors gracefully', async () => {
    const mockError = new Error('Mock error');
    (useExternalData as jest.Mock).mockImplementation(() => ({ data: null, loading: false, error: mockError }));
    
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });

  test('user interaction updates state correctly', () => {
    render(<CoreFunctionalityComponent />);

    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(screen.getByText(/updated text/i)).toBeInTheDocument();
  });

  test('accessibility features are properly implemented', () => {
    render(<CoreFunctionalityComponent />);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('aria-label', 'Click Me Button');
  });

  test('edge cases for data handling are covered', () => {
    (useExternalData as jest.Mock).mockImplementation(() => ({ data: [], loading: false, error: null }));
    
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/no items/i)).toBeInTheDocument();
  });
});