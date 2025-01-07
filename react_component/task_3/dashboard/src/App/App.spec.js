import React from 'react';
import { render,fireEvent } from "@testing-library/react";
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

test('Should call a alerte function with this string "Logging you out" ', () => {
    window.alert = jest.fn();
    render(<App />);
    fireEvent.keyDown(document, { ctrlKey: true, key: 'h' });
    expect(window.alert).toBeCalledWith("Logging you out")
});
