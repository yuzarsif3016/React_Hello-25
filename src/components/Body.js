import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [restaurants, setRestaurants] = useState(resObj); 

  return (
    <div className="body">
      <div className="filter">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredRestaurants = restaurants.filter((res) => (res.info.avgRating) > 4 );
          console.log(filteredRestaurants);
          
          setRestaurants(filteredRestaurants);
        }}
      >
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {resObj.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
