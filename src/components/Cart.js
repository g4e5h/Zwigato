import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItemCard from "./FoodItemCard";
import { emptyCart } from "../utils/cartSlice";

const Cart = () => {

    const dispatch=useDispatch();
    const handleClearCart = () =>{
        if(confirm("Do you want to remove all items from your cart?")){
            dispatch(emptyCart());
        }
    }

    const cartItemsObj = useSelector(store => store.cart.items);
    console.log(cartItemsObj);

    return Object.keys(cartItemsObj).length > 0 ?

        <div className="flex justify-between">

            {/* //*CART ITEMS */}

            <div div className="m-6 p-1 h-auto min-h-64 w-full relative  rounded-2xl box-border flex flex-col " >

                <div data-testid="cart-foodItem-cards" className="flex flex-wrap border-2 rounded-2xl justify-center">

                    {/* {//* FOODITEM CARDS } */}
                    {Object.keys(cartItemsObj)?.map((cartItemkey, idx) => {
                        return <FoodItemCard id={cartItemkey} {...cartItemsObj[cartItemkey]} key={cartItemkey + idx} />
                    }
                    )}


                </div>
                
                <button onClick={handleClearCart} className="p-2 m-2 border-4 rounded-full text-white bg-red-700 hover:bg-red-800 active:bg-red-900">Clear Cart</button>

            </div>

            {/* //* CART ITEMS AND TOTAL */}
            <div div className="flex m-6 h-auto min-h-64 p-5 border-2 rounded-2xl box-content" >

                <div className="flex flex-col justify-around flex-wrap">
                    {Object.keys(cartItemsObj)?.map((cartItemkey, idx) => {
                        const { name, defaultPrice, price, imageId, quantity, id=cartItemkey} = cartItemsObj[cartItemkey]
                        const realPrice= defaultPrice/100 || price/100 ;
                        return (
                            <div className="w-40 h-9 border-gray-100 border-y-2 flex flex-nowrap justify-between m-2 p-2">

                                <h4 className="w-auto text-nowrap">{`${realPrice}   X   ${quantity}`}</h4>
                                <h3> {"  :  "} </h3>
                                <h4>{realPrice * quantity}</h4>
                    
                            </div>
                        )
                    }
                    )}
                    <div className="m-4 text-xl font-semibold text-center"> TOTAL = {
                        Object.keys(cartItemsObj)?.reduce(
                        (acc, cartItemKey) => {
                            const {defaultPrice, price, quantity} = cartItemsObj[cartItemKey];
                            const realPrice= defaultPrice/100 || price/100 ;
                                return acc+ (realPrice*quantity);
                        },0)
                        }
                    </div>
                    <button className="h-14 rounded-lg bg-green-900  text-white hover:bg-green-800 active:bg-green-950">
                    Proceed to payment
                    </button>
                </div>

            </div>

        </div>
        :
        <div className="font-extrabold w-full text-5xl h-[80vh] flex justify-center items-center">
            Your cart is empty 😫
        </div>

}

export default Cart;