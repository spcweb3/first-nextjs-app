import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "Hello from Next.js API Route!" });
}

export async function POST(request: Request) {
    const body = await request.json();
    const { name } = body;
    return NextResponse.json({ message: `Hello ${name}!` });
}
