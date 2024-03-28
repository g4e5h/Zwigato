export function handleSearch(currentSearchText, setSearchText, restaurantsList, setRestaurants){
   if(currentSearchText.trim()==="" || !currentSearchText){
       setRestaurants(restaurantsList);
   }
   setSearchText(currentSearchText);
   debouncerForFilterData(currentSearchText, restaurantsList, setRestaurants);
}

 export function filterData(searchText, restaurantsList, setRestaurants){
    console.log("filterData called with \""+searchText+"\" searchText on restaurantList");
    const filteredData= restaurantsList?.filter((restaurantObj) => restaurantObj.info.name.toLowerCase().includes(searchText.toLowerCase()));
    console.log("Filtered Data - "+ JSON.stringify(filteredData));
    
    if(!searchText.trim()===""  || searchText){
    setRestaurants(filteredData);
    console.log("Restaurants updated from filterData!")
    }
    else{
    console.log("Restaurants not updated from filterData!")
    }

    return filteredData;
}

function debouncer(callingFunction, timeoutInterval){
        let timeout=null;
   return function(){
         clearTimeout(timeout);
         timeout=setTimeout(()=>callingFunction.apply(this, arguments)
        ,timeoutInterval);
   }
}  

export const debouncerForFilterData=debouncer(filterData,400);








