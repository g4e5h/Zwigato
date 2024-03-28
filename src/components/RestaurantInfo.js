import React from 'react'
import { IMG_CDN_URL } from '../config'

function RestaurantInfo({restaurantInfo}) {
    
  return (
    <div className={`h-96 m-4 shadow-md text-slate-800 relative box-border overflow-hidden rounded-xl flex items-center`}>
                <img className="absolute -z-20 h-[100%] w-[100%] opacity-60" src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} />

                {/* //* TEXT BOX OVER IMAGE */}
                <div className="m-4 p-2 *:m-2">
                    <h1 className=" text-5xl font-bold ">{restaurantInfo?.name}</h1>

                    <div className="flex">
                        <div className=" *:ml-3 *:mr-2 border-l-4 border-r-4 border-green-900 ">
                            <h3 className="text-green-900 font-extrabold"> {restaurantInfo?.costForTwoMessage} {restaurantInfo?.aggregatedDiscountInfo?.header && "|"} {restaurantInfo?.aggregatedDiscountInfo?.header}</h3>
                            <h2 className="text-xl font-semibold">{restaurantInfo?.avgRating} Stars | {restaurantInfo?.totalRatingsString}</h2>
                            <h3 className="font-semibold"> {restaurantInfo?.areaName} | {restaurantInfo?.feeDetails?.message}</h3>
                        </div>
                    </div>

                </div>

            </div>
  )
}

export default RestaurantInfo
