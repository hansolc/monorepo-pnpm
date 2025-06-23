import { ResponseUserType } from "@/types/user";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

function decodeUserJwt() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (token) {
    try {
      // 실제 secret 키로 검증
      const payload = verify(
        token,
        process.env.JWT_SECRE || "default_secret"
      ) as ResponseUserType;
      return { id: payload.id, username: payload.username };
    } catch (err) {
      console.error(err);
      return null;
    }
  } else return null;
}

export { decodeUserJwt };
