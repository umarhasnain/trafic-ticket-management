import { NextResponse } from "next/server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(

process.env.NEXT_PUBLIC_SUPABASE_URL,

process.env.SUPABASE_SERVICE_ROLE_KEY

);

export async function POST(req){

try{

const body=await req.json();

const{

ticketId,

transactionId,

authorizationCode

}=body;

await supabase

.from("tickets")

.update({

payment_status:"Paid",

transaction_id:transactionId,

status:"Paid",

authorization_code:authorizationCode

})

.eq("id",ticketId);

return NextResponse.json({

success:true

});

}catch(err){

return NextResponse.json({

success:false,

message:err.message

});

}

}