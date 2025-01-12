import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    default: {
        color: 'blue',
    },
    urgent: {
        color: 'red',
    },
});

class NotificationItem extends React.PureComponent {

    constructor(props){
        super(props)
    }

    render(){
        const { type, value, html, markAsRead } = this.props;
        return (
            <li
                className={css(type === 'default' ? styles.default : styles.urgent)}
                data-notification-type={type}
                dangerouslySetInnerHTML={type === 'urgent' && html !== undefined ? html : undefined}
                onClick={markAsRead}
            >
                {type === 'urgent' && html !== undefined ? null : value}
            </li>
        );
    }
}

NotificationItem.propTypes = {
    id: PropTypes.number.isRequired,
    markAsRead: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    html: PropTypes.object,
    value: PropTypes.string.isRequired,
};

NotificationItem.defaultProps = {
    type: 'default',
    html: undefined,
    value: '',
};

export default NotificationItem;