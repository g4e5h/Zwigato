import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"

test("Logo loaded on Header render", () => {

    const header = render(

        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>

    );

    const logo= header.getAllByTestId('logo');
    expect(logo[0].src).toMatch(/.(png|svg|jpg|jpeg)$/);

});

test("0 Cart items on Header render", () => {

    const header = render(

        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>

    );

    const cart= header.getByTestId('cart');
    expect(cart.innerHTML).toBe("Cart - 0");

});