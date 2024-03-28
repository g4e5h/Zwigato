import {render, waitFor, fireEvent} from "@testing-library/react"
import { MENU_DATA_FOR_BURGER_SINGH_PUNJABI } from "../../../mocks/data";
import { StaticRouter } from "react-router-dom/server"
import {Provider} from "react-redux"
import store from "../../utils/store"
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";

global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json: ()=> Promise.resolve(MENU_DATA_FOR_BURGER_SINGH_PUNJABI),
    })
})

test("Load Menu shimmer on RestaurantMenu render", ()=>{
    const restaurantMenu = render(
        <StaticRouter>
            <Provider store={store}>
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    )

    const shimmerMenuCards = restaurantMenu.getByTestId('shimmer-menu-cards');
    
    expect(shimmerMenuCards.children.length).toBe(4);

})

test("Adding and removing items from cart", async()=>{

   const restaurantMenu= render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaurantMenu />
                <Cart />
            </Provider>
        </StaticRouter>
    )

    await waitFor(()=> expect(restaurantMenu.getByTestId('restaurant-menu')));

    let cart= restaurantMenu.getByTestId('cart');
    const addDishButtons = restaurantMenu.getAllByTestId('add-dish');
    const removeDishButtons = restaurantMenu.getAllByTestId('remove-dish');

    expect(cart.innerHTML).toBe("Cart - 0");

    fireEvent.click(addDishButtons[0]);
    fireEvent.click(addDishButtons[1]);
    fireEvent.click(addDishButtons[2]);
    fireEvent.click(addDishButtons[2]);

    expect(cart.innerHTML).toBe("Cart - 4");

    fireEvent.click(removeDishButtons[0]);
    fireEvent.click(removeDishButtons[4]); //* removing a dish that is not added

    expect(cart.innerHTML).toBe("Cart - 3");
    
    const cartFoodItems= restaurantMenu.getByTestId('cart-foodItem-cards');
    
    expect(cartFoodItems.children.length).toBe(2);

})