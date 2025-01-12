import { render,screen,fireEvent } from "@testing-library/react";
import Login from "./Login";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

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


test('should check that the email input element will be focused whenever the associated label is clicked', async () => {
    render(<Login />)
    const labelEmail = screen.getByText('Email');
    const emailInput = screen.getByLabelText('Email', { selector: 'input' });
    fireEvent.click(labelEmail);
    emailInput.focus();
    expect(emailInput).toHaveFocus();
})

test('should check that the password input element will be focused whenver the associated label is clicked', async () => {
    render(<Login />)
    const labelPass = screen.getByText('Password');
    const passwordInput = screen.getByLabelText('Password', { selector: 'input' });
    fireEvent.click(labelPass);
    passwordInput.focus()
    expect(passwordInput).toHaveFocus();
});