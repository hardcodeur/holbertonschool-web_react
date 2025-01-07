import React from "react";
import "./Notifications.css";
import NotificationItem from './NotificationItem.jsx';
import closeBtn from "../assets/close-button.png";
import PropTypes from 'prop-types';




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

    render(){
        if(this.props.displayDrawer){
            if(this.props.notifications.length > 0){
                return (
                    <>
                    <div className="notification-title">Your notifications</div>
                    <div className="notifications">
                        <div className="notif-head">
                            <p>Here is the list of notifications</p>
                            <button role="button" onClick={this.btnClose} aria-label="close" style={{textAlign: "end",cursor:"pointer",border: "none",backgroundColor:"transparent"}}><img src={closeBtn} alt="close" /></button>
                        </div>
                        <ul>
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
                    <div className="notification-title">Your notifications</div>
                    <div className="notifications">
                        <p>No new notification for now</p>
                    </div>
                    </>
                )
            }
        }else{
            return (
                <>
                <div className="notification-title">Your notifications</div>
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