
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";
import CourseList from "../CourseList/CourseList.jsx"
import { getLatestNotification } from "../utils/utils.js";
import './App.css'

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

function App({ isLoggedIn = false }) {
  return (
    <>
      <div className="root-notifications">
        <Notifications notifications = {notificationsList} />
      </div>
      <Header/>
      <div className="App-body">
        {!isLoggedIn && <Login />}
        {isLoggedIn && <CourseList courses = {coursesList} />}
      </div>
      <Footer />
    </>
  )
}

export default App



