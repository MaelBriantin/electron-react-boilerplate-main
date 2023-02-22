/* eslint-disable prettier/prettier */
import { createContext, useMemo, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type UserContextType = {
  name: string;
  id: number;
  setName: (name: string) => void;
};

const initialUser: UserContextType = {
  name: '',
  id: NaN,
  setName: () => undefined,
};

export const UserContext = createContext<UserContextType>(initialUser);

const UserContextProvider = (props: Props) => {
  const { children } = props;
  const [user, setUser] = useState(initialUser);

  const userContextValues: UserContextType = useMemo(
    () => ({
      name: user.name,
      id: user.id,
      setName: (name: string) => setUser((u) => ({ ...u, name })),
    }),
    [user]
  );

  return (
    <UserContext.Provider value={userContextValues}>
      {user.name}
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
