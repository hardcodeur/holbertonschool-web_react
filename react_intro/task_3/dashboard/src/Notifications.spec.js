import Notifications from "./Notifications";
import { render,screen,fireEvent } from "@testing-library/react";

test('return notifications title "Here is the list of notifications"', () => {
    render(<Notifications />)
    const title = screen.getByText("Here is the list of notifications",{exact: false})
    expect(title).toBeInTheDocument();
});

test('Check the existence of the button element', () => {
    render(<Notifications />)
    const btn = screen.getByRole('button', { name: "close" });
    expect(btn).toBeInTheDocument();
});

test('Check 3 li elements notifications', () => {
    render(<Notifications />)
    const li = screen.getAllByRole('listitem');
    expect(li.length).toEqual(3)
});

test('Check whether clicking the close button logs', () => {
    render(<Notifications />)
    // On espionne la console pour voir les valeurs affichés
    const consoleLogSpy = jest.spyOn(console, 'log');
    const btn = screen.getByRole('button', { name: "close" });
    // on simule le clique
    fireEvent.click(btn)
    expect(consoleLogSpy).toHaveBeenCalledWith("Close button has been clicked");
});
