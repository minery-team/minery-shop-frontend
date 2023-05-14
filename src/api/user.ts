import { User } from "@/models/User";
import { requester } from "./requester";

export const getUser = (id: number) => {
  // return requester.get(`/api/user/${id}`);
  return dummyUser
}

// TODO: Remove
const dummyUser: User = {
  id: 0,
  name: "알콜과 엔돌핀",
  email: "drink@drink.com",
  phone: "010-2023-0514",
  registeredAt: "2021-01-01",
}