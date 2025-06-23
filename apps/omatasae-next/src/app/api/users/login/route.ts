import User from "@lib/db/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { connect } from "@lib/db/dbConfig";
import { UserProps } from "@/types/user";

connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody: UserProps = await request.json();
    const { username, password } = reqBody;

    //check if user exists
    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json(
        { error: "존재하지 않는 아이디 입니다." },
        { status: 400 }
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "비밀번호가 틀렸습니다." },
        { status: 400 }
      );
    }

    const tokenData = {
      id: user._id,
      username: user.username,
    };

    // Create a token with expiration of 1 day
    const token = jwt.sign(
      tokenData,
      process.env.JWT_SECRET || "default_secret",
      {
        expiresIn: "1d",
      }
    );

    // Create a JSON response indicating successful login
    const response = NextResponse.json({
      response: tokenData,
      success: true,
    });

    // Set the token as an HTTP-only cookie
    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
