import React from "react";
import ReactDOM from "react-dom/client";

/**
 * header
 * -logo
 * -navbar
 * Body
 * -Search
 * -resto container
 *  - cards
 * Footer
 * -copyright
 * -links
 * -addresss
 */


const resObj = {
  "id": "565141",
  "name": "Dum Pukht Biryani",
  "cloudinaryImageId": "cdnvse50x9uaz6ytbm0m",
  "locality": "Marathahalli",
  "areaName": "Marathahalli",
  "costForTwo": "₹300 for two",
  "cuisines": [
  "Biryani",
  "Chinese",
  "Indian",
  "Beverages",
  "Desserts"
  ],
  "parentId": "75219",
  "avgRatingString": "--",
  "sla": {
  "deliveryTime": 76,
  "lastMileTravel": 12.8,
  "serviceability": "SERVICEABLE",
  "slaString": "75-80 mins",
  "lastMileTravelString": "12.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-02-18 00:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹125 OFF",
  "subHeader": "ABOVE ₹299",
  "discountTag": "FLAT DEAL"
  },
  "orderabilityCommunication": {
  "title": {},
  "subTitle": {},
  "message": {},
  "customIcon": {}
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  }

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn6.f-cdn.com/contestentries/138969/13901059/54b67fa240afc_thumb900.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  const {resData} = props
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cdnvse50x9uaz6ytbm0m"
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(",")}</h4>
      <h4>{resData.avgRatingString}</h4>
      <h4>{resData.sla.deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj}/>
        <RestaurantCard resData={resObj}/>
     
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      //footer
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
