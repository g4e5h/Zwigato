import { useState, useContext } from "react";
import Title from "./Title";
import { Link } from 'react-router-dom';
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = useContext(UserContext);

    const cartItemsObj = useSelector(store => {
        return store.cart.items;
    });

    return (
        <div className="flex justify-between items-center bg-white shadow-xl ">

            <Title />

            <div className="p-4">
                <ul className="flex ">

                    {/* <div className="-m-3 mr-8 border border-green-900 p-2 rounded-lg"> */}
                    <div className="-m-3 mr-8 text-center text-" >
                        <li className=" font-bold"> Hi {user.name}!</li>
                        <li className=" font-semibold"> {user.email}</li>
                    </div>

                    <Link className="border border-green-900 m-2 p-2 rounded-lg" to="/">
                        <li className="">Home</li>
                    </Link>

                    <Link className="border border-green-900 m-2 p-2 rounded-lg" to="/about">
                        <li>About</li>
                    </Link>

                    <Link to="/contact" className="border border-green-900 m-2 p-2 rounded-lg">
                        <li>Contact</li>
                    </Link>

                    <Link to="/instamart" className="border border-green-900 m-2 p-2 rounded-lg">
                        <li>Instamart 🚲</li>
                    </Link>

                    <Link to="/cart" className="border border-green-900 m-2 p-2 rounded-lg">
                        <li data-testid='cart'>
                            Cart - {
                                Object.values(cartItemsObj)
                                    .reduce((acc, cartItemObj) => acc + cartItemObj.quantity, 0)
                            }
                        </li>
                    </Link>

                    <button className="border ml-8  p-4 rounded-lg" onClick={() => setIsLoggedIn((currIsLoggedIn) => !currIsLoggedIn)}>
                        {isLoggedIn ? "Logout" : "Login"}
                    </button>

                </ul>
            </div>
        </div>
    );
};

export default Header;