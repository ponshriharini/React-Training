import React from 'react';
  
  const App.test = () =>  {
	return (
	  <div>
	  </div>
	);
  }
  
  export default App.test;
  import React from 'react';
  import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
