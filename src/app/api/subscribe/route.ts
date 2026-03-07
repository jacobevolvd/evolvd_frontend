import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const API_SECRET = process.env.KIT_API_SECRET;

  if (!API_SECRET) {
    console.error("Missing KIT_API_SECRET environment variable");
    return NextResponse.json(
      { error: "Newsletter service is not configured." },
      { status: 500 },
    );
  }

  try {
    const res = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": `${API_SECRET}`,
      },
      body: JSON.stringify({
        email_address: email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        {
          error:
            data.errors?.[0]?.message ||
            "Something went wrong. Please try again.",
        },
        { status: res.status },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
