import { getUser } from "@/api/user";
import { useQuery } from "@tanstack/react-query";

export const useUserQuery = (userId: number) => {
  return useQuery([userId], () => {
    return getUser(userId);
  });
}
