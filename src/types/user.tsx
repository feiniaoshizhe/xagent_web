export interface UserItem {
    id: number,
    name: string,
    username: string,
    email: string,
    avatar: string,
    role: string

}

export const users: UserItem[] = [
  {
    id: 1,
    name: "shadcn",
    username: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
    role: "administrator",
  }
];

export const rootUser = users[0];
