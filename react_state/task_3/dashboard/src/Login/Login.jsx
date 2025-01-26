import React from 'react';
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

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email : this.props.email || "",
      password : this.props.password || "",
      enableSubmit : false
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  enableSubmit = ()=>{
    const {email,password} = this.state
    return this.validateEmail(email) && password.length >= 8
  }

  handleLoginSubmit = (event)=>{
    const {email,password} = this.state
    event.preventDefault();
    this.props.login(email,password)
  }

  handleChangeEmail(event){
    const newEmail = event.target.value;
    this.setState(
      (prevState) => ({
        email: newEmail,
        enableSubmit: this.validateEmail(newEmail) && prevState.password.length >= 8,
      })
    );
  }

  handleChangePassword(event){
    const newPassword = event.target.value;
    this.setState(
      (prevState) => ({
        password: newPassword,
        enableSubmit: this.validateEmail(prevState.email) && newPassword.length >= 8,
      })
    );
  }



  render(){
    return (
      <>
      <div className={css(styles.small, styles.large)}>
        <p>Login to access the full dashboard</p>
        <form action='#' method="post" onSubmit={this.handleLoginSubmit}>
          <label className={css(styles.label)} htmlFor="email">Email</label>
          <input className={css(styles.input)} 
          onInput={this.handleChangeEmail}
          value={this.state.email}
          type="email"
          name="email" 
          id="email"
          />
          <label className={css(styles.label)} htmlFor="pass">Password</label>
          <input className={css(styles.input)} 
          onInput={this.handleChangePassword}
          value={this.state.password}
          type="password"
          name="pass"
          id="pass"  />
          <input value="ok" type="submit" disabled={!this.state.enableSubmit} />
        </form>
      </div>
      </>
    )
  }

}

const LoggedLogin = WithLogging(Login)

export default LoggedLogin;
