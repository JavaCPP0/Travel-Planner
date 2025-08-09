import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { loginSchema } from "@/lib/validators";
import bcrypt from "bcrypt";
import { signJwt, setAuthCookie } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = loginSchema.parse(body);

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
      return NextResponse.json(
        { message: "이메일 또는 비밀번호가 올바르지 않습니다." },
        { status: 401 }
      );

    const ok = await bcrypt.compare(password, user.password);
    if (!ok)
      return NextResponse.json(
        { message: "이메일 또는 비밀번호가 올바르지 않습니다." },
        { status: 401 }
      );

    const payload = { id: user.id, email: user.email, name: user.name };
    const token = signJwt(payload);
    setAuthCookie(token);

    return NextResponse.json({ user: payload });
  } catch (e: any) {
    return NextResponse.json(
      { message: e?.message ?? "요청 오류" },
      { status: 400 }
    );
  }
}
