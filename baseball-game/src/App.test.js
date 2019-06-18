import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'; // << install this
import '@testing-library/react/cleanup-after-each';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders Baseball Score Table', () => {
    const { getByText } = render(<App />)

    getByText(/Baseball Score Table/i);
    // if there are errors rendering the component, the test will fail
  });

});
