function Login() {
    return (
        <>
            <form>
                <div className="form-control">
                    <input className="email" name="email" id="email" />
                </div>
                <div className="form-control">
                    <input type="submit" value="Login" />
                </div>
            </form>
        </>
    );
}

export default Login;
