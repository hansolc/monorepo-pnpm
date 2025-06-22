import { connect } from "@lib/db/dbConfig";
import User from "@lib/db/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

type UserProps = {
  username: string;
  password: string;
};

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody: UserProps = await request.json();
    const { username, password } = reqBody;

    const user = await User.findOne({ username });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //hash password using bcryptjs.
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    // Saves the new user to the database.
    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "Something Wrong!" }, { status: 500 });
    }
  }
}
