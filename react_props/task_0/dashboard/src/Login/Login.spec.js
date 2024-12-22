import { render,screen } from "@testing-library/react";
import Login from "./Login";

test('should check the login form label email and pass', () => {
    render(<Login />)
    const labelEmail = screen.getByText(/email/i);
    const labelPass = screen.getByText(/password/i)
    expect(labelEmail).toBeInTheDocument();
    expect(labelPass).toBeInTheDocument();
});

test('should check the login form input email and pass', () => {
    render(<Login />)
    const emailInput = screen.getByRole('textbox');
    const passwordInput = screen.getByLabelText(/Password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    
});

test('Should check the button form', () => {
    render(<Login />)
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
});