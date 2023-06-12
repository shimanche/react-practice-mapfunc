type User = {
  data: { admin: boolean; email: string; name: string; age?: number };
  id: { id: string };
};

export const UserData = () => {
  const user1: User = {
    data: { admin: true, email: "john@test.com", name: "John Doe" },
    id: {
      id: "hX3oIfWSEqxJFRIqin8q"
    }
  };
  const user2: User = {
    data: { admin: false, email: "eric@test.com", name: "eric Doe" },
    id: {
      id: "1111IfWSEqxJFRIqin8q"
    }
  };
  return { user1, user2 };
};
