import { NextResponse } from "next/server";

export async function POST(req) {
  try {

    const { amount } = await req.json();

    // TODO:
    // Next phase me yahan Converge API call hogi.

    return NextResponse.json({

      success: true,

      demo: true,

      amount,

      message:
        "Token API Ready"

    });

  } catch (err) {

    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      {
        status: 500,
      }
    );

  }
}