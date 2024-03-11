import { ReactNode, useReducer } from "react";
import UserContext from "./userContext";
interface LoginAction {
  type: "LOGIN";
  username: string;
}
interface LogoutAction {
  type: "LOGOUT";
}
export type AuthAction = LoginAction | LogoutAction;
const authReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return state;
};

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;
