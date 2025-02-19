import PropTypes from 'prop-types';

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.object,
    value: PropTypes.string.isRequired,
};

function NotificationItem({ type, html, value }) {

    if (type === 'default') {
        return (
            <li
                style={{ color: "blue" }}
                data-notification-type={type}
            >{value}</li>
        );
    } else if (type === 'urgent' && html !== undefined) {
        return (
            <li
                style={{ color: "red" }}
                data-notification-type={type}
                dangerouslySetInnerHTML={html}
            ></li>
        );
    } else {        
        return (
            <li
                style={{ color: "red" }}
                data-notification-type={type}
            >{value}</li>
        );
    }

}

export default NotificationItem;