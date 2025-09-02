import { useState } from "react"

export function EmiCalculator(){

const [amount, setAmount] = useState(100000);
const [years, setYears] = useState(1);
const [rate, setRate] = useState(10.45);
const [emi, setEMI] = useState(0);
function handleAmountChange(e){
setAmount(parseInt(e.target.value));
}
function handleYearChange(e){
setYears(parseInt(e.target.value));
}
function handleRateChange(e){
setRate(parseFloat(e.target.value));
}
function CalculateClick(){
var P = amount;
var r = rate/12/100;
var n = years * 12;
var E = P * r * (Math.pow(1+r,n)) / (Math.pow(1+r,n)-1);
setEMI(E);
}

return(
<div className="container-fluid bg-secondary p-2" style={{height:'100vh'}}>
<div className="p-4 m-4 border bg-light border-1 border-dark">
<h5 className="text-center">Personal Loan EMI Calculator</h5>
<div className="row my-4">
<div className="col">
Amount you need &#8377; <input onChange=
{handleAmountChange} value={amount} type="text" size="15" />

</div>
<div className="col">
for <input type="text" onChange={handleYearChange} value=

{years} size="2" /> years
</div>
<div className="col">
interest rate <input onChange={handleRateChange} value={rate}

type="text" size="4" /> %
</div>
</div>
<div className="row my-4">
<div className="col">
<input type="range" onChange={handleAmountChange}

min="100000" value={amount} max="1000000" step="10000" className="form-
range" />

<div>
<span>&#8377; 1,00,000/-</span>
<span className="float-end">&#8377; 10,00,000/-</span>
</div>
</div>
<div className="col">
<input type="range" onChange={handleYearChange} min="1"

value={years} max="5" step="1" className="form-range" />

<div>
<span>1 Year</span>
<span className="float-end">5 Years</span>
</div>
</div>
<div className="col">
<input type="range" onChange={handleRateChange} min="10.45"

value={rate} max="18.45" step="0.01" className="form-range" />

<div>
<span>10.45%</span>
<span className="float-end">18.45%</span>
</div>
</div>
</div>
<div className="row my-4">

<div className="col text-end">

<button onClick={CalculateClick} className="btn btn-
primary">Calculate</button>

</div>
</div>
<div className="row mt-5">
<div className="col text-center fs-4">
Your monthy EMI is <span className="fw-bold">
{emi.toLocaleString('en-in',{style:'currency', currency:'INR',
minimumFractionDigits:0})} </span> for next <span>{years*12}</span> months

</div>
</div>
</div>
</div>
)
}