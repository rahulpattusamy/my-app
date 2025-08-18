import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Rahul" },
    { id: 2, name: "Ashwin" },
    { id: 3, name: "Kaif" },
    { id: 4, name: "Bharath" },
  ]);
}
