import  {useState} from "react";
function Databinding(){
   /* const {user}=useState("John");*/
   /*const {name,setName}=useState(anyName);*/
      var user ="John";
      const [price]= useState(30000);
      const [price1]=useState(4000000);
      const [views]=useState(50000000);
      const [weight]=useState(30);
      const[data]=useState(['a','b']);
      const[categories]=useState(['Electronic','Fashion','Footware']);
    return(
        <>
       <p>Hello ! {user} </p>
       <input type="text" value={user}/>
      <div>{price.toFixed(2)}</div>
      <div>{price.toFixed(1)}</div>
      <div>{price1.toPrecision(7)}</div>
      <div>{price1.toPrecision(6)}</div>
      <div>{price.toLocaleString()}</div>
      <div>{price.toLocaleString('en-in')}</div>
      <div>{price.toLocaleString('en-us')}</div>
      <div>{price1.toLocaleString('en-in')}</div>
      <div>{price1.toLocaleString('en-us')}</div>
      <div>{views.toLocaleString('en-in', {notation:'compact'})}</div>
      <div>{views.toLocaleString('en-us',{notation:'compact'})}</div>
      <div>{price.toLocaleString('en-in',{style:'currency', currency:'INR'})}</div>
      <div>{weight.toLocaleString('en-in',{style:'unit',unit:'kilogram'})}</div>
      <div>{weight.toLocaleString('en-in',{style:'unit',unit:'centimeter'})}</div>
      <ol>
        {
          data.map((item,index)=><li key={index}>item</li>)
        }
      </ol>
      <ol>
      {
        data.map((item,index)=><li key={index}>{item}</li>)
      }
      </ol>
      <ol>
        {
          categories.map((categories,index)=><li key={index}>{categories}</li>)
        }
      </ol>

        </>
    )
}
export default Databinding

