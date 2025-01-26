import { render,screen } from "@testing-library/react";
import Header from "./Header";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

test('Should return a good title text : School dashboard',()=>{
    render(<Header />)
    const header = screen.getByRole("heading", { level: 1, name: /School dashboard/i });
    expect(header).toBeInTheDocument();
})

test('Should check header image is présent', () => {
    render(<Header />)
    const imgHeader = screen.getByRole("img", {name: /holberton logo/i });
    expect(imgHeader).toBeInTheDocument();
})