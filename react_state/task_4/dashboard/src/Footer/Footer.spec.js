import { render,screen } from "@testing-library/react";
import Footer from "./Footer";
import { getCurrentYear, getFooterCopy } from "../utils/utils";

test("Should render the footer text", () => {
    render(<Footer />);
    const expectedFooterText = `Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`;
    const footerText = screen.getByText(expectedFooterText);
    expect(footerText).toHaveTextContent(/Copyright 2025 - Holberton School/i);
});