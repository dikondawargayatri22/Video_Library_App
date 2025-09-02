import{useState}from "react";
export function EventDemo1(){
    const[userName,setUserName]=useState('Jhon!');
    function handleNameChange(e){
        setUserName(e.target.value);
    }

    function handleDetailClick(...Product){
        var[id,name,stock]=Product;
        alert(`id=${id}\nName=${name}\nStock=${stock}`);

    }

    
    return(
        <div className="container-fluid">
        <div className="mt-4">
            UserName:<input type="text"onChange={handleNameChange}value={userName}/>
            <p>Hello!..{userName}</p>
            <button onClick={()=>{handleDetailClick(1,'Tv',true)}}>Details</button>
        </div>
        </div>
    );
}

