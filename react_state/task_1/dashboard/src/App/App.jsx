import React from "react";
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import LoggedLogin from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";
import BodySectionWithMarginBottom  from "../BodySection/BodySectionWithMarginBottom.jsx";
import LoggedCourseList from "../CourseList/CourseList.jsx"
import BodySection from "../BodySection/BodySection.jsx"
import { getLatestNotification } from "../utils/utils.js";
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const notificationsList = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
];

const coursesList = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const styles = StyleSheet.create({
  body: {
    height: '100%',
  },
  html: {
    height: '100%',
  },
  root: {
    height: '100%',
  },
  rootNotifications: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end', // 'end' devient 'flex-end'
  },
});



class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      displayDrawer : false,
    }
  }

  keybordLogOutDetector(event){
    if(event.ctrlKey && event.key == "h"){
      alert("Logging you out");
      this.props.logOut();
    }else{
      return;
    }
  }

  handleDisplayDrawer = ()=>{
    this.setState({displayDrawer : true})
  }

  handleHideDrawer = ()=>{
    this.setState({displayDrawer : false})
  }

  componentDidMount() {
    document.addEventListener("keydown",this.keybordLogOutDetector)
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.keybordLogOutDetector);
  }

  render(){
    return (
      <>
        <div className={css(styles.rootNotifications)}>
          <Notifications 
          notifications = {notificationsList} 
          displayDrawer = {this.state.displayDrawer} 
          handleDisplayDrawer = {this.handleDisplayDrawer} 
          handleHideDrawer = {this.handleHideDrawer} 
          />
        </div>
        <Header/>
        <div className="App-body">
          {!this.props.isLoggedIn && <BodySectionWithMarginBottom title="Log in to continue"><LoggedLogin /></BodySectionWithMarginBottom>}
          {this.props.isLoggedIn && <BodySectionWithMarginBottom title="Course list" > <LoggedCourseList courses = {coursesList} /> </BodySectionWithMarginBottom>}
          <BodySection title="News from the School"><p>Holberton School News goes here</p></BodySection>
        </div>
        <Footer />
      </>
    )
  }
}

App.propTypes= {
  isLoggedIn : PropTypes.bool,
  logOut: PropTypes.func,
}

App.defaultProps={
  isLoggedIn : false,
  logOut : ()=>{}
}

export default App
