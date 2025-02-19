import "./Notifications.css";
import NotificationItem from './NotificationItem.jsx';
import closeBtn from "../assets/close-button.png";
import PropTypes from 'prop-types';

Notifications.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            html: PropTypes.object,
        })
    ).isRequired,
};

function btnClose(){
    console.log('Close button has been clicked');
}

function Notifications({ notifications }) {
    return (
        <>
        <div className="notifications">
            <div className="notif-head">
                <p>Here is the list of notifications</p>
                <button role="button" onClick={btnClose} aria-label="close" style={{textAlign: "end",cursor:"pointer",border: "none",backgroundColor:"transparent"}}><img src={closeBtn} alt="close" /></button>
            </div>
            <ul>
                {notifications.map((notification) => (
                    <NotificationItem
                        key={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                    />
                ))}
            </ul>
        </div>
        </>
    )
}

export default Notifications