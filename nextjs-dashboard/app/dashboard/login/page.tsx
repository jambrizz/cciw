export default function LoginPage() {
    return (
        <>
            <div className="">
                <form>
                    <div>
                        <label htmlFor='email'>Email: </label>
                        <input type='email' name='email' id='email' />
                    </div>
                    <div>
                        <label htmlFor='password'>Password: </label>
                        <input type='password' name='password' id='password' />
                    </div>
                    <br />
                    <input type='submit' value='Log In' />
                </form>
            </div>
        </>
    )
}