import React from "react";
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";
import CourseList from "../CourseList/CourseList.jsx"
import { getLatestNotification } from "../utils/utils.js";
import './App.css'
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



class App extends React.Component{

  constructor(props){
    super(props);
    this.keybordLogOutDetector = this.keybordLogOutDetector.bind(this);
  }

  keybordLogOutDetector(event){
    if(event.ctrlKey && event.key == "h"){
      alert("Logging you out");
      this.props.logOut();
    }else{
      return;
    }
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
        <div className="root-notifications">
          <Notifications notifications = {notificationsList} />
        </div>
        <Header/>
        <div className="App-body">
          {!this.props.isLoggedIn && <Login />}
          {this.props.isLoggedIn && <CourseList courses = {coursesList} />}
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
