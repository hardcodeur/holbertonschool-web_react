import holbertonLogo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    appHeader: {
      display: 'flex',
      alignItems: 'center',
      borderBottom: '2px solid #e1003c',
      height: '30vh',
    },
    appHeaderH1: {
      color: '#e1003c',
    },
    appHeaderImg: {
      width: '10rem',
    },
});

function Header(){
    return(
        <>
        <div className={css(styles.appHeader)}>
            <img className={css(styles.appHeaderImg)} src={holbertonLogo} alt="holberton logo" />
            <h1 className={css(styles.appHeaderH1)} >School dashboard</h1>
        </div>
        </>
    )
}

export default Header