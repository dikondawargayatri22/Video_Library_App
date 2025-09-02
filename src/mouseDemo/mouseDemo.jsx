import axios from 'axios';
import{useEffect,useState}from "react";
export function MouseDemo(){
    const[mobile,setMobile]=useState([{img_src:null}]);
    const[preview,setPreview]=useState("");
   
        function handleMouseover(e){
            setPreview(e.target.src);
        }
         useEffect(()=>{
        axios.get("mobile.json")
        .then(response=>{
            setMobile(response.data);
        });
    },[])
    return(
        <div className='container-fluid'>
            <div className='row mt-4'>
                <div className='col-1'>
                    {
                        mobile.map(mobile=><div key={mobile.img_src}><img onMouseOver={handleMouseover} src={mobile.img_src}className='border-style'width="40" height="40"/></div>)
                    }
                </div>
                <div className='col-11'>
                    <img width="300" src={preview}height="300"/>
                </div>
            </div>
        </div>
    );
}

