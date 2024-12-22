import { render,screen } from "@testing-library/react";
import App from "./App";

test('renders all components correctly', () => {
    render(<App />);
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Copyright 2024 - Holberton School/i)).toBeInTheDocument();
});

