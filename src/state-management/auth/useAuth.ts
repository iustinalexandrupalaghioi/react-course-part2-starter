import { useContext } from "react";
import UserContext from "./userContext";

const useAuth = () => useContext(UserContext);
export default useAuth;
