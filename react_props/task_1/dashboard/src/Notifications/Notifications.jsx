import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeBtn from "../assets/close-button.png";

function btnClose(){
    console.log('Close button has been clicked');
}

function Notifications() {
    return (
        <>
        <div className="notifications">
            <div className="notif-head">
                <p>Here is the list of notifications</p>
                <button role="button" onClick={btnClose} aria-label="close" style={{textAlign: "end",cursor:"pointer",border: "none",backgroundColor:"transparent"}}><img src={closeBtn} alt="close" /></button>
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