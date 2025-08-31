
import{useFormik}from 'formik';
import axios from 'axios';
import{Link,useNavigate}from 'react-router-dom';

export function AdminLogin(){
    let navigate=useNavigate()
    const formik=useFormik({
        initialValues:{
            "admin_id":"",
            "password":""
        },
        onSubmit:(admin)=>{
            axios.get(`http://localhost:3000/Admin`)
            .then(response=>{
                console.log(response.data)
                var result=response.data.find(user=> user.admin_id === admin.admin_id)
                //console.log(result,"dataaaaaaaaaa")
                if(result){
                    if(admin.password===result.password){
                        window.sessionStorage.setItem('uname',result.admin_id);
                        navigate("/admin_dashboard");
                    
                    }else{
                        alert("Invalid password!..")
                    }
                }else{
                        alert('Invalid user_Id');
                    }
                
            })

        }
    })
    return(
        <div className="bg-light p-4 w-25">
            <h3>Admin Login</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>admin_id</dt>
                    <dd><input type="text"name='admin_id' onChange={formik.handleChange}className="form-control"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password"name='password' onChange={formik.handleChange}className="form-control"/></dd>
                    <button type="submit"className="btn btn-warning">Login</button>
                    <Link to='/' className='btn btn-danger mx-2'>Cancel</Link>
                </dl>
                

            </form>
        </div>
    )
}