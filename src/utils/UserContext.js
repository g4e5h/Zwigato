import {createContext} from "react";

const UserContext= createContext({
    name:"Guest",
    email:"guest@foodvilla.com",
});

UserContext.displayName="UserContext";

export default UserContext;
