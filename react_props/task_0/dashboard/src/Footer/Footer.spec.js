import { render,screen } from "@testing-library/react";
import Footer from "./Footer";

test("Should render the footer text", () => {
    render(<Footer />);
    const footerText = screen.getByText(/Copyright 2024 - Holberton School/i);
    expect(footerText).toBeInTheDocument();
});