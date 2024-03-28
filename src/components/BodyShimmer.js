import CardShimmer from "./RestaurantCardShimmer"

const BodyShimmer = () => (

    <div data-testid="shimmer">
        <div className="search-container p-5 mt-4 shadow-lg animate-pulse">
            <input className="w-52 h-16 rounded-lg p-6 outline-green-800 border-4"
            />

            <button
                className=" w-24 h-14 p-2 m-2 rounded-lg  text-white border-slate-300 border-4"
            >
                Search
            </button>


        </div>


        <div className="restaurant-list flex flex-wrap justify-between justify-items-start ">
            {

                Array(7).fill("").map((_, idx) => <CardShimmer key={idx} />)

            }
        </div>
    </div>



);


export default BodyShimmer;