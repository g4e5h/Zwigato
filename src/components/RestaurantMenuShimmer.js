import React from 'react'

function RestaurantMenuShimmer() {
    return (
        <>
            <div className={`h-96 m-4 shadow-md text-slate-800 bg-slate-200 overflow-hidden rounded-xl flex flex-col justify-center animate-pulse`}>

                <div className=" text-2xl h-4 w-[30%] m-4 bg-slate-300 " />
                <div className=" text-2xl h-2 w-[12%] m-4 bg-slate-300 " />
                <div className="text-base h-2 w-[15%] m-4 bg-slate-300 " />
                <div className="text-sm h-2 w-[8%] m-4 bg-slate-300 " />

            </div>

            <div className="bg-slate-100 bg-opacity-6 h-[auto] m-4 shadow-md text-slate-800 box-border overflow-hidden rounded-xl animate-pulse" >
                <h1 className="text-5xl text-center font-extrabold m-4 p-4 underline"> MENU </h1>

                <div className="flex flex-col w-full flex-wrap">

                    {/* CATEGORY CARD */}
                    <div className="m-6 p-1 h-auto border-2 rounded-2xl box-border">
                        <div className=" text-2xl h-4 w-[30%] m-4 bg-slate-300 " />

                        <div data-testid="shimmer-menu-cards" className="flex justify-around flex-wrap">

                            {/* {//* FOODITEM CARD } */}
                            {
                                Array(4).fill("").map((_, idx) => {
                                    return (<div key={idx} className="flex justify-center flex-col text-slate-800 m-6 w-56 h-60 border-2 rounded-2xl relative overflow-hidden box-border ">
                                    <div className="text-base h-2 w-[65%] m-4 bg-slate-300 " />
                                    <div className="text-base h-2 w-[40%] m-4 bg-slate-300 " />
                                    </div>)
                                }
                            )
                            }

                        </div>


                    </div>


                </div>
            </div>



        </>
    )
}

export default RestaurantMenuShimmer
