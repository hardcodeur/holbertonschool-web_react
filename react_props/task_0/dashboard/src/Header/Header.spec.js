import { render,screen } from "@testing-library/react";
import Header from "./Header";

test('Should return a good title text : School dashboard',()=>{
    render(<Header />)
    const header = screen.getByText(/School dashboard/i);
    expect(header).toBeInTheDocument();
})

test('Should check header image is présent', () => {
    render(<Header />)
    const imgHeader = screen.getByAltText(/holberton logo/i);
    expect(imgHeader).toBeInTheDocument();
})