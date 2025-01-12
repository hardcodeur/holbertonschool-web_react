import WithLogging from "../HOC/WithLogging.jsx"
import { StyleSheet,css } from 'aphrodite';

const styles = StyleSheet.create({
    label: {
      marginRight: '0.5rem',
    },
    input: {
      marginRight: '1rem',
    },
    small: {
      '@media (max-width: 899px)': {
          width: '400px',
      },
    },
    large: {
        '@media (min-width: 900px)': {
            width: '90%',
        },
    },
  });

function Login() {
    return (
        <>
        <div className={css(styles.small, styles.large)}>
          <p>Login to access the full dashboard</p>
          <label className={css(styles.label)} htmlFor="email">Email</label>
          <input className={css(styles.input)} type="email" name="email" id="email"/>
          <label className={css(styles.label)} htmlFor="pass">Password</label>
          <input className={css(styles.input)} type="password" name="pass" id="pass"  />
          <button role="button" type="submit">OK</button>
        </div>
        </>
    )
}

const LoggedLogin = WithLogging(Login)

export default LoggedLogin;
