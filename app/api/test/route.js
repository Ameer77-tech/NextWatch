import { NextResponse } from "next/server";

export async function GET() {
  try {
    return new NextResponse("HEY THERE", { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
