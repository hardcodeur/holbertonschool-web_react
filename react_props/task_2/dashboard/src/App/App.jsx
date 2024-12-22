
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";
import { getLatestNotification } from "../utils/utils";
import './App.css'

const notificationsList = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
];

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications notifications = {notificationsList} />
      </div>
      <Header/>
      <Login />
      <Footer />
    </>
  )
}

export default App



