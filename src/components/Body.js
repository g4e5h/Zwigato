import RestaurantCard from "./RestaurantCard";
import { getRestaurants } from "../utils/helper";
import { useEffect, useState, useContext } from "react";
import { handleSearch, filterData } from "../utils/filterDebouncer";
import BodyShimmer from "./BodyShimmer";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext"

const Body = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    //restaurants are initialized to restaurantList
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

    //
    const { name, email, setUser } = useContext(UserContext);

    console.log("Body component is being rendered with following search value: ", searchText);

    useEffect(() => {
        console.log("Body.useEffect( function(){} , [] ) called!")
        getRestaurants(setRestaurantList, setRestaurants);
    }, []);

    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>🔴 You're offline! </h1>
    }

    return (restaurantList.length > 0) ? (

        <>

            <div className="search-container p-5 mt-4 shadow-lg flex justify-between">
                <div>
                    <input
                        data-testid="search-input"
                        type="text"
                        className="w-56 h-16 rounded-lg p-6 outline-green-800 border-4"
                        placeholder="Search any restaurant..."
                        value={searchText}
                        onChange={(e) => handleSearch(e.target.value, setSearchText, restaurantList, setRestaurants)}
                    />

                    <button
                        data-testid="search-btn"
                        className=" w-24 h-14 p-2 m-2 rounded-lg bg-green-800 text-white"
                        onClick={() => {
                            filterData(searchText, restaurantList, setRestaurants);
                        }}>
                        Search
                    </button>
                </div>

                <div>
                    <input
                        type="text"
                        className="w-48 h-16 rounded-lg p-6 outline-green-800 border-4 text-slate-300 focus:text-slate-600"
                        placeholder="Change {name} "
                        value={name}
                        onChange={
                            (e) => {
                                 setUser((oldContext) => ({ ...oldContext, name: e.target.value }))
                            }
                        }
                    />
                    <input
                        type="text"
                        className=" ml-5 w-48 h-16 rounded-lg p-6 outline-green-800 border-4 text-slate-300 focus:text-slate-600"
                        placeholder="Change {email} "
                        value={email}
                        onChange={
                            (e) => {
                                 setUser((oldContext) => ({ ...oldContext, email: e.target.value }))
                            }
                        }
                    />
                </div>

            </div>


            <div data-testid="res-list" className="restaurant-list flex flex-wrap justify-between justify-items-start ">
                {
                    restaurants.length > 0
                        ?
                        restaurants.map((restaurant, idx) =>
                            <RestaurantCard {...restaurant} key={btoa(encodeURIComponent(restaurant?.info?.name)) + idx} id={btoa(encodeURIComponent(restaurant?.info?.name)) + idx} />)
                        :
                        <h1>No restaurants matched your search!</h1>
                }
            </div>
        </>
    )

        :

        <BodyShimmer />;

};

export default Body;