import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '../../Components/NavBar';

describe('NavBar Component', () => {
  test('renders NavBar with brand name', () => {
    render(<NavBar />);
    const brandElement = screen.getByText(/Xpress Tracker/i);
    expect(brandElement).toBeInTheDocument();
    expect(brandElement).toHaveClass('text-white fw-bold fst-italic');
  });

  test('renders Track Shipment button', () => {
    render(<NavBar />);
    const buttonElement = screen.getByRole('button', { name: /Track Shipment/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('btn button');
  });

  test('button click does not cause any errors', () => {
    render(<NavBar />);
    const buttonElement = screen.getByRole('button', { name: /Track Shipment/i });
    fireEvent.click(buttonElement);
    // No assertion needed, just ensuring no errors occur on click
  });
});
