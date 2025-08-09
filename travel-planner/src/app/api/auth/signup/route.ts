import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/lib/validators";
import bcrypt from "bcrypt";
import { signJwt, setAuthCookie } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, name } = registerSchema.parse(body);

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return NextResponse.json(
        { message: "이미 존재하는 이메일입니다." },
        { status: 409 }
      );
    }

    const hashed = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: { email, password: hashed, name },
      select: { id: true, email: true, name: true },
    });

    const token = signJwt(user);
    setAuthCookie(token);

    return NextResponse.json({ user });
  } catch (e: any) {
    return NextResponse.json(
      { message: e?.message ?? "요청 오류" },
      { status: 400 }
    );
  }
}
