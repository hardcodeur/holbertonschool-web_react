
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";
import './App.css'

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <Header/>
      <Login />
      <Footer />
    </>
  )
}

export default App



