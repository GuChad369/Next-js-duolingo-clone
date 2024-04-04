import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2eWNYD7Exf7roqR8upZtoUGczG2",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};