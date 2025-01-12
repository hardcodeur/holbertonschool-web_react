import React from "react";

const WithLogging = (WrappedComponent) => {
    class WithLogging extends React.Component {
        constructor(props) {
            super(props)
        }
    
        componentDidMount(){
            console.log(`Component ${WrappedComponent.name ? WrappedComponent.name : 'Component'} is mounted`); 
        }

        componentWillUnmount(){
            console.log(`Component ${WrappedComponent.name ? WrappedComponent.name : 'Component'} is going to unmount`); 
        }
    
        render(){
            return(
                <WrappedComponent {...this.props} />
            )
        }
    }

    WithLogging.displayName = `WithLogging(${WrappedComponent.name || 'Component'})`;
    return WithLogging;
}

export default WithLogging
