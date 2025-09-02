import  './login.css';
export function Login(){
    return(
        <>
        <main className='main-style'>
         <form className="form-style">
        <h1>User Login</h1>
        <dl>
        <dt>User Name</dt>
        <dd><input type="text"/></dd>
        <dt>Password</dt>
        <dd><input type="password"/></dd>
        </dl>
        <button>Login</button>
         </form>
        </main>
       
        </>
    )
}
