import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req) {

  try {

    const body = await req.json();

    const { data, error } =
      await supabaseAdmin
        .from("ticket_submissions")
        .insert([body])
        .select()
        .single();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data);

  } catch (err) {

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );

  }

}