import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { afterEach } from '@jest/globals';
import WithLogging from './WithLogging';

afterEach(cleanup);

class MockApp extends React.Component {
    render() {
        return (
            <h1>
                Hello from Mock App Component
            </h1>
        );
    }
}

const MockWithHOC = WithLogging(MockApp);

test('Should renders heading "Hello from Mock App Component"', () => {
    render(<MockWithHOC />);
    const heading = getByRole('heading', { name: /hello from mock app component/i })
    expect(heading).toBeInTheDocument();
});

test('Should logs component name on mount and unmount', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const { unmount } = render(<MockWithHOC />);
    expect(consoleSpy).toHaveBeenCalledWith('Component MockApp is mounted');
    unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component MockApp is going to unmount');
    consoleSpy.mockRestore();
});