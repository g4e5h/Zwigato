import { FETCH_RESTAURANT_URL } from "../config";

export async function getRestaurants(setRestaurantList, setRestaurants) {
    try {
        console.log("Swiggy API called from getRestaurants(x,y)- config.js")
        let json = [];
        let apiData = await fetch(FETCH_RESTAURANT_URL);
        apiData = await apiData.json();
        console.log("Received data from swiggy api = ", apiData);
        json = apiData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log("json before my if = ", json)
        //  console.log("is my json array? ", json.constructor === Array);
        //  console.log("does 1st object in array contains info prop? ",json[0].hasOwnProperty('info') )
        
        let changedOnce=0;
     while(!json || json.constructor !== Array || !json[0].hasOwnProperty('info'))
       {    
          //console.log("is my json non array? ", json?.constructor !== Array);
          //console.log("1st object in array do not contain info prop? ", json?.[0]?.hasOwnProperty('info') )
            if(changedOnce>0){
            console.log("Fallbacking response from API!");
            json = [{ info: {} }];
            break;
            }
            console.log("json array changedOnce...")
            changedOnce+=1;
            json = apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        }

        setRestaurantList(json); 
        setRestaurants(json);

    } catch (error) {
        console.log("Exception occurred in config.getRestaurants(x,y) : " + error.message);
    }

}

