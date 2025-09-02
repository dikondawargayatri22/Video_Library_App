import{useRef,useState}from "react";
export function DebounceDemo(){
    const[volume,setVolume]=useState(null);
    let thread=useRef(null);
    function V1(){
        setVolume('Volume Increased to 20%');
    }
    function V2(){
        setVolume('Volume Increased to 70%');
    }
    function V3(){
        setVolume('Volume Full');
    }
    function handleVolumeClick(){
        setTimeout(V1,3000);
        thread.current=setTimeout(V2,6000);
        setTimeout(V3,10000);
    }
    function handleCancelClick(){
        clearTimeout(thread.current);
    }
    return(
        <div className="container-fluid">
            <div className="mt-3">
                <button onClick={handleVolumeClick}className="btn btn-primary bi bi-volume-up-fill"></button>
                <button onClick={handleCancelClick}className="btn btn-danger mx-2">Cancel 70%</button>
            </div>
            <h2>{volume}</h2>
        </div>
    )
}
