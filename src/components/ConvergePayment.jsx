"use client";

export default function ConvergePayment({

amount,

onSuccess

}){

const startPayment=async()=>{

const res=await fetch(

"/api/payment/token",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

amount

})

}

);

const data=await res.json();

console.log(data);

/*

Next phase

Load Converge.js

Generate Hosted Payment

*/

onSuccess();

};

return(

<button

onClick={startPayment}

className="

w-full

bg-green-600

text-white

py-4

rounded-xl

font-bold

"

>

Pay ${amount}

</button>

);

}