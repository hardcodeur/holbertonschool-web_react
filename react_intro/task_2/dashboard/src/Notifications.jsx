import "./Notifications.css";
import { getLatestNotification } from "./utils";
import closeBtn from "./assets/close-icon.png";

function Notifications() {
    return (
        <>
        <div className="notifications">
            <div className="notif-head">
                <p>Here is the list of notifications</p>
                <button onClick={console.log("Close button has been clicked")} aria-label="close" style={{cursor:"pointer",border: "none",backgroundColor:"transparent"}}><img src={closeBtn} alt="close" /></button>
            </div>
            <ul>
                <li data-priority="default" >New course available</li>
                <li data-priority="urgent" >New resume available</li>
                <li dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
        </>
    )
}

export default Notifications