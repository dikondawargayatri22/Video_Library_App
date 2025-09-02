import{useState}from "react";
export function EventDemo2(){
    const[userName,setUserName]=useState('John');
    function handleNameChange(e){
        setUserName(e.target.value);
    }
    function handleDetailChange(e,...product){
        var[id,name,stock]=product;
        alert(`id=${id}\nName=${name}\nstock=${stock}\nButton=${e.target.value}`);
    }
    return(
        <div>
        <div>
        UserName:<input type="text" onChange={handleNameChange}value={userName}/>
        <div >Hello!{userName}</div>
        <button name="Details" id="btnDetail"onClick={(e)=>handleDetailChange(e,1,'mobile',true)}>Details</button>
        </div>
        </div>
    );
}
