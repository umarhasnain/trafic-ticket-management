import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(

process.env.NEXT_PUBLIC_SUPABASE_URL,

process.env.SUPABASE_SERVICE_ROLE_KEY

);

export async function POST(req){

try{

const formData = await req.formData();

const front = formData.get("ticketFront");

const back = formData.get("ticketBack");

const firstName=formData.get("firstName");
const lastName=formData.get("lastName");
const email=formData.get("email");
const phone=formData.get("phone");
const citationNumber=formData.get("citationNumber");
const county=formData.get("county");
const issueDate=formData.get("issueDate");
const violationType=formData.get("violationType");
const citationsCount=formData.get("citationsCount");
const attorneyFee=formData.get("attorneyFee");

let frontUrl="";
let backUrl="";

if(front){

const frontName=`front-${Date.now()}-${front.name}`;

const frontBuffer=Buffer.from(await front.arrayBuffer());

const {error}=await supabase.storage

.from("tickets")

.upload(frontName,frontBuffer,{

contentType:front.type

});

if(error) throw error;

frontUrl=`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/tickets/${frontName}`;

}

if(back){

const backName=`back-${Date.now()}-${back.name}`;

const backBuffer=Buffer.from(await back.arrayBuffer());

const {error}=await supabase.storage

.from("tickets")

.upload(backName,backBuffer,{

contentType:back.type

});

if(error) throw error;

backUrl=`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/tickets/${backName}`;

}

const {error}=await supabase

.from("tickets")

.insert({

first_name:firstName,

last_name:lastName,

email,

phone,

citation_number:citationNumber,

county,

issue_date:issueDate,

violation_type:violationType,

citations_count:Number(citationsCount),

attorney_fee:Number(attorneyFee),

front_image:frontUrl,

back_image:backUrl,

payment_status:"Pending",

payment_amount:Number(attorneyFee)

});

if(error) throw error;

return NextResponse.json({

success:true

});

}catch(err){

return NextResponse.json({

success:false,

message:err.message

},{status:500});

}

}