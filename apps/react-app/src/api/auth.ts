export const login = () => {
  return new Promise((resolve, reject) => {
    try {
      throw new Error("존재하지 않는 회원입니다.");
      setTimeout(() => {
        resolve("success");
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
};
