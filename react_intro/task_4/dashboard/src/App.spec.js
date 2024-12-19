import { render,screen } from "@testing-library/react";
import App from "./App";

test('Should return a good title text : School dashboard',()=>{
    render(<App />)
    const header = screen.getByText(/School dashboard/i);
    expect(header).toBeInTheDocument();
})

test('Should return 2 good text',()=>{
    render(<App />)
    const p1 = screen.getByText(/Login to access the full dashboard/i);
    const p2 = screen.getByText(/Copyright 2024 - holberton School/i);
    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
})

test('Should check header image is présent', () => {
    render(<App />)
    const imgHeader = screen.getByAltText(/holberton logo/i);
    expect(imgHeader).toBeInTheDocument();
})

test('should check the login form label email and pass', () => {
    render(<App />)
    const labelEmail = screen.getByText(/email/i);
    const labelPass = screen.getByText(/password/i)
    expect(labelEmail).toBeInTheDocument();
    expect(labelPass).toBeInTheDocument();
});

test('should check the login form input email and pass', () => {
    render(<App />)
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByLabelText(/Password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    
});

test('Should check the button form', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
});