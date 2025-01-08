import React from 'react';
import { render,fireEvent,screen } from "@testing-library/react";
import { test, expect, jest } from "@jest/globals";
import App from "./App";


test('renders all components correctly', () => {
    render(<App />);
});

test('should call logOut function when control and h keys are pressed', () => {
    const logOutMock = jest.fn();
    jest.spyOn(window, 'alert').mockImplementation(() => { });
    render(<App isLoggedIn={false} logOut={logOutMock} />);
    fireEvent.keyDown(document, { ctrlKey: true, key: 'h' });
    expect(logOutMock).toHaveBeenCalledTimes(1);
});

test('Should call a alerte function with this string "Logging you out"', () => {
    window.alert = jest.fn();
    render(<App />);
    fireEvent.keyDown(document, { ctrlKey: true, key: 'h' });
    expect(window.alert).toHaveBeenCalledWith("Logging you out")
});

test('Should check if user is login the title "Course list" is present', () => {
    const props = {
        isLoggedIn : true
    }
    render(<App {...props} />)
    const title = screen.getByRole('heading', { name: /Course list/i })
    expect(title).toBeInTheDocument()
});

test('Should check if user is logout the title "Log in to continue" is present', () => {
    const props = {
        isLoggedIn : false
    }
    render(<App {...props} />)
    const title = screen.getByRole('heading', { name: /Log in to continue/i })
    expect(title).toBeInTheDocument()
});

test('Should check if the title "News from the School" is present when the default componant is call', () => {
    render(<App />)
    const title = screen.getByRole('heading', { name: /News from the School/i })
    expect(title).toBeInTheDocument()
});