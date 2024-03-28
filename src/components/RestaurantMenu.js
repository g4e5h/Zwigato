import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import FoodCategoryCard from "./FoodCategoryCard";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";

const RestaurantMenu = () => {

    console.log(" RestaurantMenu component rendered...");

    window.scrollTo(0,0);
    const { id: resId } = useParams();
    const restaurantData = useRestaurant(resId);

    let restaurantInfo = restaurantData?.data?.cards[0]?.card?.card?.info;
    let restaurantMenu = restaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
 
    // console.log("Restaurant Data ->",restaurantData)
    // console.log("Restaurant Info ->", restaurantInfo);
    // console.log("Restaurant Menu ->", restaurantMenu)
    if(!restaurantInfo){
         console.log("Restaurant menu and food items indexes changed.. trying with other indexes!");
         restaurantInfo = restaurantData?.data?.cards[2]?.card?.card?.info;
         restaurantMenu = restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    }

    const foodItems=restaurantMenu?.filter( (foodItemObj)=>( foodItemObj?.card?.card["@type"]?.toLowerCase()?.includes("itemcategory") ));

    // console.log("Food Items Category",foodItems)

    
        return(

        foodItems ? 
        <div data-testid='restaurant-menu'>

            {/* //* RESTAURANT INFO */}
            <RestaurantInfo restaurantInfo={restaurantInfo} />
            

            {/* //* RESTAURANT MENU */}

            <div className="bg-slate-100 bg-opacity-6 h-[auto] m-4 shadow-md text-slate-800 box-border overflow-hidden rounded-xl " >
                <h1 className="text-5xl text-center font-extrabold m-4 p-4 underline"> MENU </h1>

                <div data-testid="food-item-category-wrapper" className="flex flex-col w-full flex-wrap">

                    {/* {//*CATEGORY CARD} */}
                    
                    {foodItems?.filter((categoryObj)=> categoryObj?.card?.card?.itemCards )
                    .map( (categoryObj, idx)=><FoodCategoryCard categoryObj={categoryObj} key={`${categoryObj?.card?.card?.title} ${idx}`} /> )}

                </div>


            </div>

        </div>

        :

        <RestaurantMenuShimmer />

        );
    
}

export default RestaurantMenu;