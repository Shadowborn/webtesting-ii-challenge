import React from 'react';
import { render, fireEvent } from '@testing-library/react'; // << install this
import '@testing-library/react/cleanup-after-each';

import Display from './Display';
// show no display available if player list is empty or not passed

describe('<Display />', () => {
    it('should show "No Players" if none passed', () => {
        const { getByText } = render(<Display />)

        getByText(/No players to list/i);
    })
})