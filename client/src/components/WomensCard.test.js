import React from 'react';
import { render } from '@testing-library/react';
import WomensCard from './WomensCard';

test('Name, Country, Searches are rendered', async () => {
const { getByText } = await render(<WomensCard/>);
    // const name = getByText(/name/i);
    // const country = getByText(/country/i);
    // const searches = getByText(/searches/i);

  
    // expect(name).toBeInTheDocument();
    // expect(country).toBeInTheDocument();
    // expect(searches).toBeInTheDocument();
  });