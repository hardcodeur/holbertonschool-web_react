import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {

    constructor(props){
        super(props)
    }
    render(){
        if (this.props.type === 'default') {
            return (
                <li
                    onClick={()=>{this.props.markAsRead(this.props.id)}}
                    style={{ color: "blue" }}
                    data-notification-type={this.props.type}
                >{this.props.value}</li>
            );
        } else if (this.props.type === 'urgent' && this.props.html !== undefined) {
            return (
                <li
                    onClick={()=>{this.props.markAsRead(this.props.id)}}
                    style={{ color: "red" }}
                    data-notification-type={this.props.type}
                    dangerouslySetInnerHTML={this.props.html}
                ></li>
            );
        } else {        
            return (
                <li
                    onClick={()=>{this.props.markAsRead(this.props.id)}}
                    style={{ color: "red" }}
                    data-notification-type={this.props.type}
                >{this.props.value}</li>
            );
        }
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