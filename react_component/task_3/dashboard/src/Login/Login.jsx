import "./Login.css"

function Login() {
    return (
        <>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email"/>
        <label htmlFor="pass">Password</label>
        <input type="password" name="pass" id="pass"  />
        <button role="button" type="submit">OK</button>
        </>
    )
}

export default Login;
