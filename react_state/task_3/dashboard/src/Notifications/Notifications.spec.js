import { render, screen, fireEvent } from '@testing-library/react';
import { getLatestNotification } from '../utils/utils'
import { test, expect, jest } from "@jest/globals";
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Notifications component', () => {
  test('Should renders the notifications title', () => {
    const props = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
      ],
      displayDrawer: true
    }
    render(<Notifications {...props} />);
    const titleElement = screen.getByText(/Here is the list of notifications/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('Should renders the close button', () => {
    const props = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
      ],
      displayDrawer: true
    }
    render(<Notifications {...props} />);
    const buttonElement = screen.getByRole('button', { name: /close/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('Should renders three notifications', () => {
    const props = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
      ],
      displayDrawer: true
    }
    render(<Notifications {...props} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(3);
  });


  test('Should display the 3 notification items with their given text', () => {
    const props = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
      ],
      displayDrawer: true
    };
    render(<Notifications {...props} />);
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
    expect(screen.getByText(/Urgent requirement/)).toBeInTheDocument();
  });

  test('Should display the text No new notification for now when Notifications list is empty', () => {
    const props = {
      notifications: [],
      displayDrawer: true
    };
    render(<Notifications {...props} />);
    expect(screen.getByText('No new notification for now')).toBeInTheDocument();
  });

  test('Notifications does not re-render if the notifications prop length stays the same', () => {
    const initialNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];
    const { rerender } = render(<Notifications notifications={initialNotifications} />);
    rerender(<Notifications notifications={initialNotifications} />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  });

  test('Notifications re-renders when the notifications prop length changes', () => {
    const initialNotifications = [
      { id: 1, type: 'default', value: 'New course available' }
    ];
    const newNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];
    const { rerender } = render(<Notifications notifications={initialNotifications} />);
    rerender(<Notifications notifications={newNotifications} />);
    expect(screen.getByText('New resume available')).toBeInTheDocument();
  });

  test('Should verify if clicking on the menu item calls handleDisplayDrawer function', () => {
    handleDisplayDrawer = jest.fn();
    render(<Notifications 
      displayDrawer={false}
      handleDisplayDrawer = {handleDisplayDrawer}
    />);
    const btn = screen.getByText('Your notifications');
    fireEvent.click(btn);
    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
  });

  test('Should verify if clicking on the menu item calls handleHideDrawer function', () => {
    const newNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];
    handleHideDrawer = jest.fn();
    render(<Notifications 
      notifications={newNotifications}
      displayDrawer={true}
      handleHideDrawer = {handleHideDrawer}
    />);
    const buttonElement = screen.getByLabelText("Close");
    fireEvent.click(buttonElement);
    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
  });
});

