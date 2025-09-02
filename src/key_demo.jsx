import axios from "axios"
import {useEffect,useState}from "react"
export function KeyDemo(){
    const[users,setUsers]=useState([{user_id:null}]);
    const[msg,setMsg]=useState(null);
    const[errorClass,setErrorClass]=useState(null);
    const[pwdStatus,setPwdStatus]=useState(null);
    const[styleObj,setStyleObj]=useState({width:null});
    const[progressClass,setProgressClass]=useState(null);

    function LoadUsers(){
        axios.get('user.json')
        .then(response=>{
            setUsers(response.data);
        })
    }
    useEffect(()=>{
        LoadUsers();
    },[])
    function VerifyUser(e){
        for(var user of users){
            if(user.user_id===e.target.value){
                setMsg('User Id Taken-Try Another');
                setErrorClass('text-danger');
                break;
            }else{
                setMsg("User Id-Available");
                setErrorClass('text-success');
            }
        }
    }
    function VerifyPassword(e){
        var regExp=/(?=.*[A-Z])\w{4,15}/;
        if(e.target.value.match(regExp)){
            setPwdStatus('Strong Password');
            setStyleObj({width:'100%'});
            setProgressClass('progress-bar bg-success progress-bar-striped progress-bar-animated');
        }
        else{
            if(e.target.value.length<4){
                setPwdStatus('Poor Password');
                setStyleObj({width:'20%'});
                setProgressClass('progress-bar bg-danger progress-bar-striped progress-bar-animated');
            
            }
            else{
                setPwdStatus('Weak Password');
                setStyleObj({width:'70%'});
                setProgressClass('progress-bar bg-warning progress-bar-striped progress-bar-animated');
            }
        }
        }
    return(
        <div>
            <h2>Registraition User</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onKeyUp={VerifyUser}/></dd>
                <dd className={errorClass}>{msg}</dd>
                <dt>Password</dt>
                <dd><input OnKeyUp={VerifyPassword} type="password"/></dd>
                <dd>
                    <div className="progress">
                        <div className={progressClass}style={styleObj}>
                        {pwdStatus}
                        </div>
                    </div>
                </dd>
            </dl>
            </div>
    )
}
