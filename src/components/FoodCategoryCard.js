import React from "react";
import FoodItemCard from "./FoodItemCard";
import { STRING_FOR_UNDEFINED_CATEGORY_FOOD } from "../config";

const FoodCategoryCard = ({categoryObj}) => {

    let categoryItems=categoryObj?.card?.card?.itemCards;
   
    return(
        <div className="m-6 p-1 h-auto border-2 rounded-2xl box-border">

        <h1 className="text-2xl  font-extrabold m-4 mb-2 p-4 underline"> {categoryObj?.card?.card?.title ?? STRING_FOR_UNDEFINED_CATEGORY_FOOD} </h1>

        <div data-testid="food-item-wrapper" className="flex justify-around flex-wrap">

            {/* {//* FOODITEM CARD } */}
           {  categoryItems?.map((foodItem, idx)=> <FoodItemCard {...foodItem?.card?.info} key={foodItem?.card?.info?.name ?? idx}/>)  }
            

        </div>

    </div>
    )
}

export default FoodCategoryCard;