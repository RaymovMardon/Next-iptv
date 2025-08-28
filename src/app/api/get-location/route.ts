//import { NextResponse } from "next/server";

import {NextRequest, NextResponse } from "../../../../node_modules/next/server";

export async function GET(req: NextRequest) {
  try {
    
    const { searchParams } = new URL(req.url);
    const targetUrl = searchParams.get("url");
    const response = await fetch(targetUrl, {
      method: "GET",
      redirect: "manual",
    });
    const location = response.headers.get("location");

    return NextResponse.json({ location });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}