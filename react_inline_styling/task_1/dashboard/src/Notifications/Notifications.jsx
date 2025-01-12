import React from "react";
import NotificationItem from './NotificationItem.jsx';
import closeBtn from "../assets/close-button.png";
import PropTypes from 'prop-types';
import { StyleSheet,css } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    border: '1px dotted #e1003c',
    padding: '0 1rem',
  },
  notifHead: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notifHeadImg: {
    width: '1rem',
    height: '1rem',
  },
  notificationsList: {
    color: '#e1003c',
  },
  notificationsListItemDefault: {
    color: 'blue',
  },
  notificationTitle: {
    textAlign: 'right',
  },
});



class Notifications extends React.Component {

    constructor(props){
        super(props)
    }

    btnClose(){
        console.log('Close button has been clicked');
    }

    markAsRead(id){
        console.log(`Notification ${id+1} has been marked as read`);
    }

    shouldComponentUpdate(nextProps){
        if (this.props.notifications.length !== nextProps.notifications.length) {return true}
        if (this.props.displayDrawer !== nextProps.displayDrawer) {return true}
        return false;
    }

    render(){
        if(this.props.displayDrawer){
            if(this.props.notifications.length > 0){
                return (
                    <>
                    <div className={css(styles.notificationTitle)}>Your notifications</div>
                    <div className={css(styles.notifications)}>
                        <div className={css(styles.notifHead)}>
                            <p>Here is the list of notifications</p>
                            <button role="button" onClick={this.btnClose} aria-label="close" style={{textAlign: "end",cursor:"pointer",border: "none",backgroundColor:"transparent"}}><img className={css(styles.notifHeadImg)} src={closeBtn} alt="close" /></button>
                        </div>
                        <ul className={css(styles.notificationsList)}>
                            {this.props.notifications.map((notification,index) => (
                                <NotificationItem
                                    id={index}
                                    key={notification.id}
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}
                                    markAsRead={this.markAsRead}
                                />
                            ))}
                        </ul>
                    </div>
                    </>
                )
            }else{
                return (
                    <>
                    <div className={css(styles.notificationTitle)}>Your notifications</div>
                    <div className={css(styles.notifications)}>
                        <p>No new notification for now</p>
                    </div>
                    </>
                )
            }
        }else{
            return (
                <>
                <div className={css(styles.notificationTitle)}>Your notifications</div>
                </>
            )
        }
    }
}

Notifications.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            html: PropTypes.object,
        })
    ).isRequired,
    displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
    notifications: [],
    displayDrawer: true,
};

export default Notifications