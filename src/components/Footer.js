import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {

    const user = useContext(UserContext);
    console.log("Value recieved in Footer from UserContext=> ", user);
    return (
        <div className="m-4 p-4">
            <h4 className="text-2xl font-bold" >
                Current logged in user -{">"} {user.name} : {user.email}
            </h4>
        </div>
    )
}

export default Footer;