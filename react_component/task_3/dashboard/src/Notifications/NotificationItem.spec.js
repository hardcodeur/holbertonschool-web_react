import { render, screen,fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { test, expect } from '@jest/globals';

test('NotificationItem render', () => {
    render(<NotificationItem />)
})

test('Should display the correct notification type => urgent', () => {
    const props = {
        type: 'urgent',
        html: { __html: getLatestNotification() },
    }
    render(<NotificationItem {...props} />);
    const liElement = screen.getByRole('listitem');
    expect(liElement).toHaveStyle({ color: 'red' });
    expect(liElement).toHaveAttribute('data-notification-type', 'urgent');
});

test('Should display the correct notification type => default', () => {
    const props = {
        type: 'default',
        html: undefined,
    }
    render(<NotificationItem {...props} />);
    const liElement = screen.getByRole('listitem');
    expect(liElement).toHaveStyle({ color: 'blue' });
    expect(liElement).toHaveAttribute('data-notification-type', 'default');
});

test('Should check if the markAsRead props is call when click event is triggered', () => {
    const markAsRead = jest.fn();
    const props = {
        markAsRead : markAsRead,
        type: 'default',
        value: "",
    }
    render(<NotificationItem {...props} />);
    const liElement = screen.getByRole('listitem');
    fireEvent.click(liElement)
    expect(markAsRead).toHaveBeenCalledTimes(1)
});
