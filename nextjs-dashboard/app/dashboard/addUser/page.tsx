export default function AddUserPage() {
    return (
        <>
            <div className='' id=''>
                <form>
                    <div>
                        <label htmlFor='first-name'>First Name: </label>
                        <input type='text' name='first-name' id='first-name' />
                    </div>
                    <div>
                        <label htmlFor='last-name'>Last Name: </label>
                        <input type='text' name='last-name' id='last-name' />
                    </div>
                    <div>
                        <label htmlFor='email'>Email: </label>
                        <input type='email' name='email' id='email' />
                    </div>
                    <div>
                        <label htmlFor='Authorization-Level'>Authorization Level: </label>
                        <select name='Authorization-Level' id='Authorization-Level'>
                            <option value=''>Select Level</option>
                            <option value='Admin'>Admin</option>
                            <option value='User'>User</option>
                            <option value='Volunteer'>Volunteer</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='password'>Password: </label>
                        <input type='password' name='password' id='password' />
                    </div>
                    <div>
                        <label htmlFor='confirm-password'>Confirm Password: </label>
                        <input type='password' name='confirm-password' id='confirm-password' />
                    </div>
                    <br />
                    <input type='submit' value='Add User' />
                </form>
            </div>
        </>
    )
}