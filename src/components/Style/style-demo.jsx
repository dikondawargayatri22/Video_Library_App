import {useState}from "react";
import './style.css';
export function Styledemo(){
    const[imageAnimation]=useState({animationName:'Spine',animationDuration:'4s',animationIterationCount:'infinite',animationTimingFunction:'linear',animationDirection:'alternate'})
    return(
        <div className="d-flex justify-content-center align-items-center"style={{height:'100vh'}}>
            <img style={imageAnimation} src="react.svg"width="200" height="200"/>

        </div>
        
    )

}