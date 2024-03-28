import React, { lazy, Suspense, useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header"
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileFunction from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
import UserContext from "./utils/UserContext";
import BodyShimmer from "./components/BodyShimmer";
import Cart from "./components/Cart";
import store from "./utils/store";
import { Provider } from "react-redux";
// import Instamart from "./components/Instamart";



//* LAZY LOADING
//REMEMBER TO IMPORT OUTSIDE COMPONENT
const Instamart = lazy(() => import("./components/Instamart"));



const AppLayout = () => {

    const [user, setUser] = useState(useContext(UserContext));

    useEffect(() => {
        console.log("useEffect from AppLayout called => user authentication mocked.")
        setTimeout(() => {
            setUser({ name: "Deepesh Grover", email: "deepesh.grover@gmail.com" });
            console.log("authentication mock successful 😉")
        }
            , 4000);

    }, []);

    return (

        <Provider store={store}>
            <UserContext.Provider value={{ ...user, setUser }}>

                <Header />

                <Outlet />

                <Footer />

            </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <><Body /></>
            },
            {
                path: "/about",
                element: <About name="Deepesh" />,
                children: [
                    {
                        path: "profile-class",
                        element: <ProfileClass name="Deepesh Class Prop" />
                    },
                    {
                        path: "profile-function",
                        element: <ProfileFunction name="Deepesh Functional Prop" />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/instamart",
                element:
                    <Suspense fallback={<BodyShimmer />}>
                        <Instamart />
                    </Suspense>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },{
                path:"/cart",
                element:<Cart />
            }
        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);