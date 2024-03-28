export const IMG_CDN_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const FETCH_RESTAURANT_URL="https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#";
export const FETCH_MENU_URL="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.87560&lng=80.91150&restaurantId=";

export const EXPAND_ICON_URL="https://static.thenounproject.com/png/1524602-200.png" ;
export const COLLAPSE_ICON_URL="https://static.thenounproject.com/png/1524601-200.png" ;

export const STRING_FOR_UNDEFINED_CATEGORY_FOOD="MORE FOOD";
export const ALT_IMG_FOODITEM="https://img.freepik.com/premium-photo/top-view-image-lunch-box-with-healthy-food-items-water-bottle-pastel-blue-background-with_908985-30229.jpg";

const restaurantData = [

    {
        type: "restaurants",
        cards: [
            {
                info: {
                    name: "Burger King",
                    cloudinaryImageId: "https://pricemenu.in/wp-content/uploads/2023/02/Burger-King-Menu-1024x605.jpg",
                    cuisines: ["Burgers", "Americans"],
                    rating: "4.2"
                }
            },
            {
                info: {
                    name: "KFC",
                    cloudinaryImageId: "https://pricemenu.in/wp-content/uploads/2023/10/KFC-Restaurant-Menu-1024x576.jpg",
                    cuisines: ["Chicken", "Wraps", "Burgers", "Fries", "Americans"],
                    rating: "5"
                }
            },
            {
                info: {
                    name: "Uncle Ji Restaurant",
                    cloudinaryImageId: "https://cdn.britannica.com/02/239402-050-ACC075DB/plates-of-vegan-foods-ready-serve-restaurant-London.jpg",
                    cuisines: ["North Indian", "Snacks", "Beverages"],
                    rating: "4.2"
                }
            },
            {
                info: {
                    name: "Annapurna Mess",
                    cloudinaryImageId: "https://i0.wp.com/www.backpackingwithmylens.com/wp-content/uploads/2022/09/our-table-at-annapurna-cafe-capitol-hill-seattle-1.jpg?resize=770%2C515&ssl=1",
                    cuisines: ["South Indian", "North Indian", "Biryani"],
                    rating: "4.1"
                }
            },
            {
                info: {
                    name: "Dominic Pizza",
                    cloudinaryImageId: "https://www.dominos.co.in/blog/wp-content/uploads/2019/12/Domino%E2%80%99s-All-New-Masala-Pizzas.png",
                    cuisines: ["Pizzas", "Indian", "Fast Food"],
                    rating: "4.7"
                }
            },

        ]
    },

];


export let restaurantList = restaurantData.filter(obj => {
    return obj.type === "restaurants"
}).flatMap(obj => obj.cards);




