import React from 'react'
import { ALT_IMG_FOODITEM, IMG_CDN_URL } from '../config';
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { removeItem } from '../utils/cartSlice';


export default function FoodItemCard({ id = "unavailable", name = "", defaultPrice = 0, price = 0, imageId = "" }) {

  const dispatch = useDispatch();
  const addFoodItemToCart = () => {
    dispatch(addItem({ id, name, defaultPrice, price, imageId, quantity: 1 }));
  }
  const deleteFoodItemFromCart = () => {
    dispatch(removeItem({ id }));
  }

  const quantityInCart = useSelector(store => {
    return store.cart.items.hasOwnProperty(id) ? store.cart.items[id].quantity : 0;
  });

  return (
    <div className="flex items-center text-slate-800 m-6 w-56 h-60 border-2 rounded-2xl relative overflow-hidden box-border">
      <img
        className="absolute z-10 w-[100%] h-[100%] opacity-60"
        src={IMG_CDN_URL + imageId}
        onError={({ currentTarget }) => { //* extract currentTarget from e object
          currentTarget.onerror = null; //* prevents looping
          currentTarget.src = ALT_IMG_FOODITEM;
        }}
        alt="food item"
      />

      <div className=" m-4 z-30 bg-transparent text-xl font-bold">
        <div>
          <h3>{name}</h3>
          <h4 className="text-lg font-extrabold">Rs.{defaultPrice / 100 || price / 100}</h4>
        </div>

        <div className="mt-8 mb-0">
          <button data-testid='remove-dish' onClick={deleteFoodItemFromCart} className=" w-8 font-bold text-2xl mr-3 border border-black rounded-xl">-</button>
          <span>{quantityInCart}</span>
          <button data-testid="add-dish" onClick={addFoodItemToCart} className="w-8 font-bold text-2xl ml-3 border border-black rounded-xl">+</button>
        </div>

      </div>

    </div>
  )
}

