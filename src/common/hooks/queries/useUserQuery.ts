import { fetchCurrentUser } from "@/common/api/auth";
import { useQuery } from "@tanstack/react-query";

export const useUserQuery = (userId: number) => {
    return fetchCurrentUser();
  });
}
