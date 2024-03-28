import { Provider } from "react-redux";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { fireEvent, render, waitFor } from "@testing-library/react"
import store from "../../utils/store";
import {RESTAURANT_DATA} from "../../../mocks/data"
import '@testing-library/jest-dom'

global.fetch= jest.fn(()=>{
   return Promise.resolve({
        json : () => Promise.resolve(RESTAURANT_DATA),
    });
});



test("Shimmer loads on HomePage", () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

        const shimmer=body.getByTestId('shimmer');
       //  shimmer.children[1].children.length = no. of shimmer cards I created
        expect(shimmer.children[1].children.length).toBe(7);

})


test("Restaurants load on HomePage", async () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(()=>expect(body.getByTestId('search-btn')));

    const resList= body.getByTestId('res-list');

    expect(resList.children.length).toBe(9);

})

test("Search for restaurant on HomePage", async () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(()=>expect(body.getByTestId('search-btn')));

    const searchInput= body.getByTestId('search-input');
    const searchButton= body.getByTestId('search-btn');

    //* passed in a mock e(synthetic event)
    fireEvent.change(searchInput, {
        target:{
             value:"punjabi", 
            },
        });

    fireEvent.click(searchButton);

    let resList= body.getByTestId('res-list');
    expect(resList.children.length).toBe(1);

})