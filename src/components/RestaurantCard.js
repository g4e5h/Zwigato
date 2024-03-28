import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({info:{name='Not Found!', cloudinaryImageId:imageId='', cuisines=["Not Found!"], avgRating:rating='X', id=''}})=>(
    
    <Link to={"/restaurant/"+id} className="card flex-initial m-7  p-6 w-[28%] border-black outline-double outline-4 rounded-lg shadow-l overflow-hidden">
    <div className="" id={id}>
    
        <img className="h-44 w-[100%]  rounded-xl "
         src={imageId.includes('http') ? imageId : 
        ( IMG_CDN_URL + imageId)} alt="image"/>
        <h2 className="text-2xl my-4 "> {name} </h2>
        <h3 className="text-base my-4 "> {cuisines?.join(", ")} </h3>
        <h4 className="text-sm mt-6"> {rating} Stars </h4>

    </div>
    </Link>
    
);

export default RestaurantCard;