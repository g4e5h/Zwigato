import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (resId) =>{
        const [restaurantData, setRestaurantData] = useState(null);
       
        useEffect(()=>{
            console.log("useEffect from custom useRestaurant hook called! ")
            getRestaurantInfo();
        },[]);
    
        async function getRestaurantInfo(){
            let data= await fetch( FETCH_MENU_URL + resId );
            
            data=await data.json();
            setRestaurantData(data);
        }

        return restaurantData;
};

export default useRestaurant;