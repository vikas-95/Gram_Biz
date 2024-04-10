import React from "react";
import map from "/map.png";
import Numbers from "./Numbers";

const Map = () => {
    return (
        <div className="grid max-w-screen-xl gap-8 mx-auto place-self-center items-center justify-center">
            <div class="px-4 mx-auto text-center py-24 lg:py-56">
                <h1 class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
                    International hydroponic cultivation projects.
                </h1>
                <p class="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">
                    This is a map of the locations of the hydroponic cultivation projects in the world.
                </p>
                <img src={map} alt="map" />
                <Numbers />
            </div>
        </div>
    );
};

export default Map;
